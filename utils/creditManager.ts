import { db } from '@/utils/db';
import { userCredits } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export async function checkAndDeductCredits(userId: string, amount: number = 1) {
  const result = await db.transaction(async (tx) => {
    const userCredit = await tx.query.userCredits.findFirst({
      where: (credits, { eq }) => eq(credits.userId, userId)
    });

    if (!userCredit) {
      throw new Error('No credits found');
    }

    if (userCredit.credits < amount) {
      throw new Error('Insufficient credits');
    }

    await tx.update(userCredits)
      .set({ 
        credits: userCredit.credits - amount,
        updatedAt: new Date()
      })
      .where(eq(userCredits.userId, userId));

    return userCredit.credits - amount;
  });

  return result;
} 