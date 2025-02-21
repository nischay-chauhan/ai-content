import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { userCredits } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    let credits = await db.query.userCredits.findFirst({
      where: (credits, { eq }) => eq(credits.userId, userId)
    });

    if (!credits) {
      await db.insert(userCredits).values({
        userId,
        credits: 3,
        updatedAt: new Date()
      });
      
      credits = await db.query.userCredits.findFirst({
        where: (credits, { eq }) => eq(credits.userId, userId)
      });
    }

    return NextResponse.json({ credits: credits?.credits ?? 0 });
  } catch (error) {
    console.error('Error managing credits:', error);
    return NextResponse.json({ error: 'Failed to fetch credits' }, { status: 500 });
  }
} 