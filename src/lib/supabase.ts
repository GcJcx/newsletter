import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Validate URL format
if (!supabaseUrl.startsWith('https://') || !supabaseUrl.includes('.supabase.co')) {
  console.warn('Invalid or missing VITE_SUPABASE_URL. Please configure your Supabase credentials.');
}

if (!supabaseAnonKey || supabaseAnonKey === 'placeholder-key') {
  console.warn('Invalid or missing VITE_SUPABASE_ANON_KEY. Please configure your Supabase credentials.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);