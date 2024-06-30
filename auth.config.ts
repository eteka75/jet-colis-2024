import type { NextAuthConfig } from 'next-auth';

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
      const isOnDashboard = nextUrl?.pathname.startsWith('/dashboard');

      console.log(isLoggedIn, 'isLoggedIn');

      if (isLoggedIn && (pathname === '/login' || pathname === '/register')) {
        url.pathname = '/dashboard'; // Rediriger vers une page appropriée pour les utilisateurs connectés
        return Response.redirect(url);
      }
      if (isOnDashboard) {
        if (isLoggedIn) {
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // const redirectUrl = nextUrl
        //   ? new URL('/dashboard', nextUrl)
        //   : new URL('/dashboard', http);
        // return Response.redirect(redirectUrl.href);
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
