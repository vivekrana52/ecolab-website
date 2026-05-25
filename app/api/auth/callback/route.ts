import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * GET /api/auth/callback
 *
 * Handles the OAuth redirect from providers like Google.
 * Exchanges the temporary `code` for a full session, then
 * redirects the user to the dashboard.
 */
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.exchangeCodeForSession(code);
  }

  // After exchange (or if no code was present), send user to dashboard
  return NextResponse.redirect(new URL('/dashboard', request.url));
}
