// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { siteConfig } from './src/config/website';

export function authMiddleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const token =
    req.cookies.get('authjs.session-token') ||
    req.cookies.get('next-auth.session-token');

  const protectedRoutes = [
    '/dashboard',
    '/admin',
    '/statistiques',
    '/new-travel',
    '/user',
  ];

  const guestRoutes = [
    '/signup',
    '/signin',
    '/login',
    '/register',
    '/forgot-password',
  ];

  const isOnAuthPages = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isOnGuestPages = guestRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isLoggedIn = !!token;
  const homeLoginUrl = siteConfig.homeUserLogin;
  const signinUrl = '/signin';

  // utilisateur connecté et sur login ou register
  if (isLoggedIn && isOnGuestPages) {
    return NextResponse.redirect(new URL(homeLoginUrl, req.url));
  }

  // non connecté et sur les pages non autorisées
  if (!isLoggedIn && isOnAuthPages) {
    // Extraire l'URL d'origine
    const callbackUrl = `${req.nextUrl.pathname}${req.nextUrl.search}`;
    // Stocker l'URL d'origine dans un cookie
    const response = NextResponse.redirect(
      new URL(
        `${signinUrl}?callbackUrl=${encodeURIComponent(callbackUrl)}`,
        req.url
      )
    );
    response.cookies.set('callbackUrl', callbackUrl, { path: '/' });
    return response;
  }

  return NextResponse.next();
}

export function middleware(req: NextRequest) {
  // Run the authMiddleware to handle authentication
  return authMiddleware(req);
}

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/admin/:path*',
    '/statistiques/:path*',
    '/new-travel/:path*',
    '/user/:path*',
    '/login',
    '/signup',
    '/signin',
    '/register',
  ],
};
