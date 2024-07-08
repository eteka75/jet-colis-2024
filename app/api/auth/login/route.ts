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

    // Convert id to number if it's a string
    const userId = Number(user.id);
    // Create a new user object with id as number
    const userWithNumericId = { ...user, id: userId };

    const token = generateToken(userWithNumericId);
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Jetons de conexion invalides' },
      { status: 401 }
    );
  }
}
