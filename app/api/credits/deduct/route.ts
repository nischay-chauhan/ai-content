import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import { userCredits, transactions } from '@/utils/schema';
import { eq, sql } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const DeductCreditsSchema = z.object({
    amount: z.number().int().positive().max(100),
    description: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const validation = DeductCreditsSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({
                error: 'Invalid input',
                details: validation.error.issues
            }, { status: 400 });
        }

        const { amount, description } = validation.data;

        const result = await db.transaction(async (tx) => {
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
                description: description || 'Credit deduction',
                createdAt: new Date()
            });

            return userCredit.credits - amount;
        });

        return NextResponse.json({
            success: true,
            remainingCredits: result
        });
    } catch (error: any) {
        if (error.message === 'Insufficient credits') {
            return NextResponse.json({
                error: 'Insufficient credits. Please purchase more to continue.'
            }, { status: 402 });
        }
        if (error.message === 'User credits not found') {
            return NextResponse.json({
                error: 'User credits not initialized'
            }, { status: 404 });
        }
        console.error('Error deducting credits:', error);
        return NextResponse.json({
            error: 'Failed to deduct credits'
        }, { status: 500 });
    }
}
