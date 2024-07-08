// app/api/auth/register/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { registerSchema } from '@/src/lib/validations';
import { createUser } from '@/src/lib/auth.actions';

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const { firstName, lastName, email, password } = await req.json();
    console.log({ firstName, lastName, email, password });
    // Validate data with Zod
    const validationResult = registerSchema.safeParse({
      firstName,
      lastName,
      email,
      password,
    });

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: validationResult.error.errors
            .map((err) => err.message)
            .join(', '),
        },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser(firstName, lastName, email, password);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: "Erreur lors de la création de l'utilisateur" },
      { status: 500 }
    );
  }
}

// Fonction pour gérer les méthodes non autorisées
export async function OPTIONS() {
  return NextResponse.json({}, { status: 405 });
}
