import { db } from '@/utils/db';
import { userCredits, transactions } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { eq, sql } from 'drizzle-orm';

/**
 * Deducts credits from a user's account in an atomic transaction
 * @param userId - The user's ID
 * @param amount - Number of credits to deduct
 * @param description - Description of the transaction
 * @returns The new credit balance
 * @throws Error if insufficient credits or user not found
 */
export async function deductCredits(userId: string, amount: number, description: string) {
  return await db.transaction(async (tx) => {
    const [userCredit] = await tx
      .select()
      .from(userCredits)
      .where(eq(userCredits.userId, userId))
      .for('update');

    if (!userCredit) {
      throw new Error('User credits not found');
    }

    if (userCredit.credits < amount) {
      throw new Error('Insufficient credits');
    }

    await tx
      .update(userCredits)
      .set({
        credits: sql`${userCredits.credits} - ${amount}`,
        updatedAt: new Date()
      })
      .where(eq(userCredits.userId, userId));

    await tx.insert(transactions).values({
      id: uuidv4(),
      userId,
      amount: -amount,
      type: 'debit',
      description,
      createdAt: new Date()
    });

    return userCredit.credits - amount;
  });
} 