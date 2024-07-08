// app/api/auth/login/route.ts

import { NextResponse } from 'next/server';
import { validateUser, generateToken } from '@/src/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email ou mot de passe invalide' },
        { status: 400 }
      );
    }

    const user = await validateUser(email, password);
    const token = generateToken(user);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Jetons de conexion invalides' },
      { status: 401 }
    );
  }
}
