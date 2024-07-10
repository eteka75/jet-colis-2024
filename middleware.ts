import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
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
    '/login',
    '/signup',
    '/signin',
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
  const homeLoginUrl = '/dashboard';

  // Ajout de logs pour débogage
  console.log(
    '******************************Middleware called******************************'
  );
  console.log('Pathname:', pathname);
  console.log('Is Logged In:', isLoggedIn);
  console.log('Is On Auth Pages:', isOnAuthPages);
  console.log('Is On Guest Pages:', isOnGuestPages);
  console.log(
    '**********************************************************************************'
  );
  // utilisateur connecté et sur login ou register
  if (isLoggedIn && isOnGuestPages) {
    return NextResponse.redirect(new URL(homeLoginUrl, req.url));
  }

  //non connecté et sur les pages non autorisées
  if (!isLoggedIn && isOnAuthPages) {
    console.log('===================================================');
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/statistiques/:path*',
    '/new-travel/:path*',
    '/user/:path*',
    // Si vous voulez appliquer le middleware à ces pages, décommentez-les :
    '/login',
    '/signup',
    '/signin',
    '/register',
  ],
};
