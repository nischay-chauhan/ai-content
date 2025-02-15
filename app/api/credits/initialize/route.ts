import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { userCredits } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    const existingCredits = await db.query.userCredits.findFirst({
      where: (credits, { eq }) => eq(credits.userId, userId)
    });

    if (!existingCredits) {
      await db.insert(userCredits).values({
        userId,
        credits: 3,
        updatedAt: new Date()
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error initializing credits:', error);
    return NextResponse.json(
      { error: 'Failed to initialize credits' }, 
      { status: 500 }
    );
  }
} 