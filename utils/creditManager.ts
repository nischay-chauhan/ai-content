import { db } from '@/utils/db';
import { userCredits } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_CREDITS = 5; // Free trial credits

export async function checkAndDeductCredits(userId: string, amount: number = 1) {
  try {
    // First get user credits
    const userCredit = await db.query.userCredits.findFirst({
      where: (credits, { eq }) => eq(credits.userId, userId)
    });

    // If no credits found, create initial credits
    if (!userCredit) {
      await db.insert(userCredits).values({
        userId,
        credits: INITIAL_CREDITS,
        updatedAt: new Date()
      });
      
      // Return new credit balance after deduction
      return INITIAL_CREDITS - amount;
    }

    if (userCredit.credits < amount) {
      throw new Error('Insufficient credits');
    }

    // Update credits
    await db.update(userCredits)
      .set({ 
        credits: userCredit.credits - amount,
        updatedAt: new Date()
      })
      .where(eq(userCredits.userId, userId));

    return userCredit.credits - amount;
  } catch (error) {
    console.error('Error managing credits:', error);
    throw error;
  }
} 