// app/api/user/route.ts

import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verifyToken(token);

    // Check if decoded is null
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    const idAsString = String(decoded.id);
    const user = await prisma.user.findUnique({
      where: { id: idAsString },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (user) {
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error occurred' }, { status: 500 });
  }
}
