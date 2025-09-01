# TradixAI Newsletter Signup

A beautiful coming soon page with email newsletter signup functionality built with Next.js, Tailwind CSS, Supabase, and Resend.

## Features

- 🎨 Beautiful gradient design with animations
- 📧 Email validation with Zod
- 💾 Supabase database integration
- 📬 Automated confirmation emails via Resend
- 🔒 Privacy Policy and Terms of Service modals
- 📱 Fully responsive design
- ⚡ Server-side API handling

## Setup Instructions

### 1. Database Setup (Supabase)

First, create the `subscribers` table in your Supabase database by running this SQL:

```sql
-- Create subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for API access (using service role)
CREATE POLICY "Service role can manage subscribers"
  ON subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS subscribers_email_idx ON subscribers (email);
CREATE INDEX IF NOT EXISTS subscribers_created_at_idx ON subscribers (created_at DESC);
```

### 2. Resend Email Setup

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the Resend dashboard
3. **Verify your domain** (optional but recommended):
   - Go to Domains in your Resend dashboard
   - Add your domain (e.g., `tradixai.com`)
   - Follow the DNS verification steps
   - Or use `onboarding@resend.dev` for testing

### 3. Environment Variables

Create a `.env.local` file in your project root with these variables:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE=your_service_role_key_here

# Resend Configuration
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM=onboarding@yourdomain.com
ADMIN_EMAIL=your_admin_email@example.com
```

**Where to find these values:**

- **SUPABASE_URL**: Supabase Dashboard → Settings → API → Project URL
- **SUPABASE_SERVICE_ROLE**: Supabase Dashboard → Settings → API → Service Role Key (secret)
- **RESEND_API_KEY**: Resend Dashboard → API Keys
- **RESEND_FROM**: Your verified domain email or `onboarding@resend.dev` for testing
- **ADMIN_EMAIL**: Your email address to receive signup notifications

### 4. Install Dependencies & Run

```bash
npm install
npm run dev
```

## How It Works

1. **User submits email** → Frontend validates with Zod
2. **API route processes** → Saves to Supabase `subscribers` table
3. **Emails sent** → Confirmation to user + notification to admin
4. **Success state** → Shows "Check your inbox" message

## API Endpoints

- `POST /api/subscribe` - Handles email signup with validation and email sending

## Database Schema

```sql
subscribers (
  id uuid PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
)
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Validation**: Zod
- **Icons**: Lucide React

## Security Features

- Server-side email validation
- Supabase Row Level Security (RLS)
- Service role key kept server-side only
- Input sanitization and error handling