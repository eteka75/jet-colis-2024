<<<<<<< HEAD
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { User } from "@/lib/definitions";
import Google from "next-auth/providers/google";

import GitHub from "next-auth/providers/github";
=======
// import NextAuth from 'next-auth';
// import Google from 'next-auth/providers/google';
// import Github from 'next-auth/providers/github';

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [Google, Github],
// });
// import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/lib/definitions';
import Google from 'next-auth/providers/google';

import GitHub from 'next-auth/providers/github';
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
<<<<<<< HEAD
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import prisma from "./lib/primsa";
=======
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import prisma from './lib/primsa';
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    GitHub,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          // const passwordsMatch = false;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user; //Bon
        }
<<<<<<< HEAD
        console.log("Invalid credentials");
=======
        console.log('Invalid credentials');
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
        return null;
      },
    }),
  ],
});
