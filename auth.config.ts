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

      // # REDIRECTION QUAND ON EST SUR LA PAGE LOGIN ET REGISTER
      // const isOnAuthPages = protectedRoutes.some((route) => pathname === route);
      // const isOnGuestPages = guestRoutes.some((route) => pathname === route);
      const isOnAuthPages = protectedRoutes.some((route) =>
        pathname.startsWith(route)
      );
      const isOnGuestPages = guestRoutes.some((route) =>
        pathname.startsWith(route)
      );

      //const isOnAuthPages = nextUrl?.pathname.startsWith('/dashboard');
      // Ajout de logs pour débogage
      console.log('Middleware called');
      console.log('Pathname:', pathname);
      console.log('Is Logged In:', isLoggedIn);
      console.log('Is On Auth Pages:', isOnAuthPages);
      console.log('Is On Guest Pages:', isOnGuestPages);
      // # DASHBOARD
      if (isOnAuthPages) {
        if (isLoggedIn) {
          return true;
        }
        return false;
      }
      if (isLoggedIn) {
        //A ===2
        // # REDIRECTION QUAND ON EST SUR LA PAGE LOGIN ET REGISTER

        console.log(
          isOnGuestPages,
          'REEGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
        );

        if (isOnGuestPages) {
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
