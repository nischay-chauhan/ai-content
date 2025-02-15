import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq, desc, asc } from 'drizzle-orm';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const sort = searchParams.get('sort') || 'desc';

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    const history = await db.query.AIOutput.findMany({
      where: (AIOutput, { eq }) => eq(AIOutput.userId, userId),
      orderBy: (AIOutput, { desc, asc }) => 
        sort === 'desc' ? [desc(AIOutput.createdAt)] : [asc(AIOutput.createdAt)]
    });

    return NextResponse.json(history);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch history' }, 
      { status: 500 }
    );
  }
} 