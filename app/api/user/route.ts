// app/api/user/route.ts

import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { PrismaClient } from '@prisma/client';
import { UserWithoutPassword } from '@/src/types/user';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        // incluez ici uniquement les champs que vous souhaitez retourner
        // password est exclu
      },
    });

    if (user) {
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
