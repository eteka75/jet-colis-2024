// /api/update-profile/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Traitez les données ici, par exemple mettre à jour un profil

    return NextResponse.json({ message: 'Profile updated successfully!' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}
