// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { siteConfig } from './src/config/website';

// Middleware for authentication
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

  // Extraire l'URL de callback des paramètres de la requête
  const callbackUrl = searchParams.get('callbackUrl') || homeLoginUrl;

  // utilisateur connecté et sur login ou register
  if (isLoggedIn && isOnGuestPages) {
    return NextResponse.redirect(new URL(homeLoginUrl, req.url));
  }

  // non connecté et sur les pages non autorisées
  if (!isLoggedIn && isOnAuthPages) {
    // Stocker l'URL de callback dans un cookie
    const response = NextResponse.redirect(
      new URL(
        `${signinUrl}?callbackUrl=${encodeURIComponent(callbackUrl)}`,
        req.url
      )
    );
    response.cookies.set('callbackUrl', callbackUrl);
    return response;
  }

  return NextResponse.next();
}

// Middleware for internationalization
// const locales = siteConfig.locales;
// const defaulLocale = siteConfig.defaultLocale;
// const intlMiddleware = createMiddleware({
//   locales,
//   defaultLocale: defaulLocale,
// });

export function middleware(req: NextRequest) {
  // Run the intlMiddleware first to handle locale detection
  // const intlResponse = intlMiddleware(req);
  // if (intlResponse) return intlResponse;

  // Then run the authMiddleware to handle authentication
  return authMiddleware(req);
}

export const config = {
  matcher: [
    '/',
    // '/(fr|en)/:path*',
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
