import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Route-protection middleware.
 *
 * Checks for the presence of Supabase auth cookies before allowing
 * access to protected routes. If no token is found the user is
 * redirected to the homepage with a `?login=true` query param so
 * the auth modal can be opened automatically.
 *
 * NOTE: This is a lightweight check. For production you should
 * migrate to @supabase/ssr for proper cookie-based session
 * verification with token refresh support.
 */

const PROTECTED_PATHS = ['/dashboard'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  // Look for Supabase session cookies
  const hasAccessToken = request.cookies.get('sb-access-token')?.value;
  const hasRefreshToken = request.cookies.get('sb-refresh-token')?.value;

  if (!hasAccessToken && !hasRefreshToken) {
    const loginUrl = new URL('/?login=true', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
