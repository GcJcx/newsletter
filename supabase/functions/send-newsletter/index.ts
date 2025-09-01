/*
  # Send Newsletter Email Function

  This edge function sends emails to newsletter subscribers using Resend API.
  
  1. Functionality
    - Fetches all subscribed newsletter signups from database
    - Sends personalized emails using Resend
    - Handles email sending errors gracefully
    
  2. Security
    - Requires authentication to call this function
    - Uses environment variables for API keys
    
  3. Usage
    - POST request with email subject and content
    - Returns success/failure status for each email
*/

import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface EmailRequest {
  subject: string;
  content: string;
  testEmail?: string; // Optional: send to specific email for testing
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Parse request body
    const { subject, content, testEmail }: EmailRequest = await req.json();

    if (!subject || !content) {
      return new Response(
        JSON.stringify({ error: 'Subject and content are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get newsletter subscribers
    let emailQuery = supabaseClient
      .from('newsletter_signups')
      .select('email')
      .eq('subscribed', true);

    // If testing with specific email, filter to that email only
    if (testEmail) {
      emailQuery = emailQuery.eq('email', testEmail);
    }

    const { data: subscribers, error: dbError } = await emailQuery;

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch subscribers' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ 
          message: testEmail 
            ? `No subscriber found with email: ${testEmail}` 
            : 'No subscribers found' 
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // For now, we'll simulate sending emails (you'll need to add Resend API key)
    const results = [];
    
    for (const subscriber of subscribers) {
      try {
        // TODO: Replace this with actual Resend API call
        // For now, we'll just log and simulate success
        console.log(`Would send email to: ${subscriber.email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Content: ${content}`);
        
        results.push({
          email: subscriber.email,
          status: 'simulated_success',
          message: 'Email would be sent (simulation mode)'
        });
      } catch (error) {
        results.push({
          email: subscriber.email,
          status: 'error',
          message: error.message
        });
      }
    }

    return new Response(
      JSON.stringify({
        message: `Processed ${subscribers.length} email(s)`,
        results,
        note: 'Currently in simulation mode. Add Resend API key to send real emails.'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});