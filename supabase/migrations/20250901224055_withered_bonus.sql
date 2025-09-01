/*
  # Create newsletter signups table

  1. New Tables
    - `newsletter_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `created_at` (timestamp with timezone)
      - `subscribed` (boolean, default true)
      - `source` (text, default 'coming_soon_page')

  2. Security
    - Enable RLS on `newsletter_signups` table
    - Add policy for anonymous users to insert signups
    - Add policy for authenticated users to view signups

  3. Indexes
    - Index on email for fast lookups
    - Index on created_at for sorting
*/

-- Create the newsletter_signups table
CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  subscribed boolean DEFAULT true,
  source text DEFAULT 'coming_soon_page'
);

-- Enable Row Level Security
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to sign up for newsletter
CREATE POLICY "Anyone can sign up for newsletter"
  ON newsletter_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to view signups
CREATE POLICY "Authenticated users can view signups"
  ON newsletter_signups
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS newsletter_signups_email_idx ON newsletter_signups (email);
CREATE INDEX IF NOT EXISTS newsletter_signups_created_at_idx ON newsletter_signups (created_at DESC);