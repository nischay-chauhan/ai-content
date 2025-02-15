import { db } from '@/utils/db';
import { credits, transactions } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { eq } from 'drizzle-orm';

export async function deductCredits(userId: string, amount: number, description: string) {
  return await db.transaction(async (tx) => {
    const userCredits = await tx.query.credits.findFirst({
      where: (credits, { eq }) => eq(credits.userId, userId)
    });

    if (!userCredits || userCredits.balance < amount) {
      throw new Error('Insufficient credits');
    }

    await tx.update(credits)
      .set({ balance: userCredits.balance - amount })
      .where(eq(credits.userId, userId));

    await tx.insert(transactions).values({
      id: uuidv4(),
      userId,
      amount: -amount,
      type: 'debit',
      description
    });

    return userCredits.balance - amount;
  });
} 