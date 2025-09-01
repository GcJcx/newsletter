import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(async (req: Request) => {
  try {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Supabase configuration missing' 
        }),
        {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch the most recent email from newsletter_signups
    const { data: signups, error: dbError } = await supabase
      .from('newsletter_signups')
      .select('email, created_at')
      .eq('subscribed', true)
      .order('created_at', { ascending: false })
      .limit(1);

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Database error: ${dbError.message}` 
        }),
        {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        }
      );
    }

    if (!signups || signups.length === 0) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'No newsletter signups found' 
        }),
        {
          status: 404,
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        }
      );
    }

    const mostRecentEmail = signups[0].email;
    console.log('Sending test email to:', mostRecentEmail);

    // Check for Resend API key
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Resend API key not configured. Please add RESEND_API_KEY to your Supabase environment variables.' 
        }),
        {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        }
      );
    }

    // Send email using Resend
    const emailData = {
      from: 'TradixAI <noreply@tradixai.com>',
      to: [mostRecentEmail],
      subject: 'Test Email from TradixAI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #7c3aed; text-align: center; margin-bottom: 30px;">TradixAI</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
            This is a test email from my Bolt app.
          </p>
          <p style="font-size: 14px; color: #666; margin-top: 30px; text-align: center;">
            You received this email because you signed up for our newsletter.
          </p>
        </div>
      `,
      text: 'This is a test email from my Bolt app.'
    };

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend error:', resendResult);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Email sending failed: ${resendResult.message || 'Unknown error'}` 
        }),
        {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        }
      );
    }

    console.log('Email sent successfully:', resendResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Test email sent successfully to ${mostRecentEmail}`,
        emailId: resendResult.id,
        recipient: mostRecentEmail
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        }
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An unexpected error occurred' 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        }
      }
    );
  }
});