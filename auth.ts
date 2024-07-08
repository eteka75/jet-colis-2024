import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import Google from 'next-auth/providers/google';

import GitHub from 'next-auth/providers/github';
import bcrypt from 'bcryptjs';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import prisma from '@/src/lib/primsa';
import { getUserByEmail } from './src/lib/actions';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    // GitHub,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUserByEmail(email);

          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user; //Bon
        }
        console.log('Invalid credentials');

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    error: '/error', // Page d'erreur personnalisée
  },
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

  // callbacks: {
  //   session: async ({ session, token }) => {
  //     if (session && session?.user) {
  //       session?.user?.id = token.sub;
  //     }
  //     return session;
  //   },
  //   jwt: async ({ user, token }) => {
  //     if (user) {
  //       token.uid = user.id;
  //     }
  //     return token;
  //   },
  // },
  session: {
    strategy: 'jwt',
  },
});
