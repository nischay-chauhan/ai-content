import { db } from '@/utils/db';
import { userCredits } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { toast } from 'sonner';

const FREE_CREDITS = 3;
const MIN_CREDITS_FOR_PAYWALL = 0;

export async function checkAndDeductCredits(userId: string, amount: number = 1) {
  try {
    let userCredit = await db.query.userCredits.findFirst({
      where: (credits, { eq }) => eq(credits.userId, userId)
    });

    if (!userCredit || userCredit.credits < amount) {
      toast.error('Insufficient credits. Please purchase more to continue.');
      throw new Error('Insufficient credits');
    }

    // Deduct credits
    const newCreditAmount = userCredit.credits - amount;
    await db.update(userCredits)
      .set({ 
        credits: newCreditAmount,
        updatedAt: new Date()
      })
      .where(eq(userCredits.userId, userId));

    return newCreditAmount;
  } catch (error) {
    console.error('Error managing credits:', error);
    throw error;
  }
} 