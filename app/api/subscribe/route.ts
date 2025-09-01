import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate email with Zod
    const validation = emailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { email } = validation.data;

    // Insert email into Supabase
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      // Handle duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'You\'re already subscribed! Thanks for your interest.' },
          { status: 409 }
        );
      }
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save email. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: [email],
        subject: 'Welcome to TradixAI - You\'re on the list!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #7c3aed, #3b82f6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">TradixAI</h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Welcome to the future of trading</p>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border-radius: 10px; border-left: 4px solid #7c3aed;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px;">Thank you for signing up!</h2>
              
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
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails - signup was successful
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: [process.env.ADMIN_EMAIL!],
        subject: 'New TradixAI Newsletter Signup',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1e293b; margin: 0 0 20px 0;">New Newsletter Signup</h2>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              A new user has signed up for the TradixAI newsletter:
            </p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1e293b; font-weight: bold;">Email: ${email}</p>
              <p style="margin: 10px 0 0 0; color: #64748b; font-size: 14px;">
                Signed up at: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
      });
    } catch (adminEmailError) {
      console.error('Failed to send admin notification:', adminEmailError);
      // Don't fail the request if admin email fails
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}