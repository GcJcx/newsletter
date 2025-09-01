const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Welcome email function called')
    
    const { email } = await req.json()
    console.log('Email received:', email)

    if (!email) {
      console.error('No email provided')
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Check if Resend API key exists
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    console.log('Resend API key exists:', !!resendApiKey)
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable not found')
      return new Response(
        JSON.stringify({ error: 'Email service not configured - missing API key' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log('Attempting to send email via Resend API...')

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TradixAI <onboarding@tradixai.com>',
        to: [email],
        subject: 'Thank you for signing up to TradixAI newsletter',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #7c3aed, #3b82f6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">TradixAI</h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Welcome to the future of trading</p>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border-radius: 10px; border-left: 4px solid #7c3aed;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px;">Thank you for signing up to TradixAI newsletter!</h2>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                We're excited to have you join our community of forward-thinking traders and AI enthusiasts.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                You'll be the first to know about:
              </p>
              
              <ul style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; padding-left: 20px;">
                <li>Exclusive early access to our platform</li>
                <li>Latest AI trading insights and strategies</li>
                <li>Product updates and new features</li>
                <li>Special offers and beta invitations</li>
              </ul>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0;">
                Stay tuned for something amazing coming your way!
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px; color: #64748b; font-size: 14px;">
              <p style="margin: 0 0 10px 0;">Best regards,<br><strong>The TradixAI Team</strong></p>
              <p style="margin: 0; font-size: 12px;">
                If you didn't sign up for this newsletter, you can safely ignore this email.
              </p>
            </div>
          </div>
        `,
      }),
    })

    console.log('Resend API response status:', emailResponse.status)

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Resend API error response:', errorData)
      
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email', 
          details: errorData,
          status: emailResponse.status 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const emailData = await emailResponse.json()
    console.log('Email sent successfully:', emailData)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Welcome email sent successfully',
        emailId: emailData.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-welcome-email function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})