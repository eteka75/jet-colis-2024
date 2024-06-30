export { auth as middleware } from '@/auth';

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// export { auth as middleware } from "@/auth"

export default NextAuth(authConfig).auth;

export const config = {
  // matcher: [],
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    '/dashboard/:path*',
    '/admin/:path*',
    '/statistiques/:path*',
  ],
};

// import { getSession } from 'next-auth/react';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// // Middleware function to handle authentication checks
// export function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const { pathname } = req.nextUrl;

//   // Check if the user is authenticated by verifying the session cookie
//   const session = req.cookies.get('next-auth.session-token');
//   //   const session = await getSession();
//   console.log(session, '======OOOOOOOOOOOOOOOOOOOOO');
//   // Define protected routes
//   const protectedRoutes = ['/dashboard', '/admin', '/statistiques'];

//   // Check if the current pathname is one of the protected routes
//   const isProtectedRoute = protectedRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   // If trying to access a protected route and not authenticated, redirect to login
//   if (isProtectedRoute && !session) {
//     url.pathname = '/login';
//     return NextResponse.redirect(url);
//   }

//   // Allow access to all other routes
//   return NextResponse.next();
// }

// // Define the routes that should be protected by this middleware
// export const config = {
//   matcher: ['/dashboard/:path*', '/admin/:path*', '/statistiques/:path*'],
// };
