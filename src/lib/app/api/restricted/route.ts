import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth'; // Import correct pour NextAuth v4
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
export async function GET(req: Request) {
  try {
    const session = await getServerSession(req, authOptions);

    if (session) {
      return NextResponse.json({
        content:
          'This is protected content. You can access this content because you are signed in.',
      });
    } else {
      return NextResponse.json(
        {
          error:
            'You must be signed in to view the protected content on this page.',
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: 'An unexpected error occurred.',
      },
      { status: 500 }
    );
  }
}
