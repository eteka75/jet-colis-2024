import type { NextAuthConfig } from 'next-auth';
import { exit } from 'process';

const http = process.env.NEXT_PUBLIC_BASE_URL || '/';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const { pathname } = nextUrl;
      const url = nextUrl.clone();
      const isLoggedIn = !!auth?.user;
      const protectedRoutes = ['/dashboard', '/admin', '/statistiques'];
      const guestRoutes = ['/login', '/signup', '/signin', '/register'];
      console.log(
        pathname,
        'PATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
      );
      // # REDIRECTION QUAND ON EST SUR LA PAGE LOGIN ET REGISTER
      const isOnDashboard = protectedRoutes.some((route) => pathname === route);
      //const isOnDashboard = nextUrl?.pathname.startsWith('/dashboard');

      // # DASHBOARD
      if (isOnDashboard) {
        if (isLoggedIn) {
          return true;
        }
        return false;
      }
      if (isLoggedIn) {
        //A ===2
        // # REDIRECTION QUAND ON EST SUR LA PAGE LOGIN ET REGISTER
        const isInRegLoginPath = guestRoutes.some(
          (route) => pathname === route
        );
        console.log(
          isInRegLoginPath,
          'REEGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
        );

        if (isInRegLoginPath) {
          url.pathname = '/dashboard';
          return Response.redirect(url);
        }
        // const redirectUrl = nextUrl
        //   ? new URL('/dashboard', nextUrl)
        //   : new URL('/dashboard', http);
        // return Response.redirect(redirectUrl.href);
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
