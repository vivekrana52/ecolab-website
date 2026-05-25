import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase';

/**
 * Server-side Supabase client with service-role privileges.
 * Use ONLY in API routes / server actions — never expose to the browser.
 */
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
