import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import { userCredits, transactions } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { eq, sql } from 'drizzle-orm';
import { z } from 'zod';

const PaymentVerificationSchema = z.object({
  razorpay_order_id: z.string(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
  amount: z.number().int().positive().max(10000),
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const validation = PaymentVerificationSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({
        error: 'Invalid input',
        details: validation.error.issues
      }, { status: 400 });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = validation.data;

    // Verify signature
    const bodyStr = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET!)
      .update(bodyStr.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const existingTransaction = await db.query.transactions.findFirst({
      where: (t, { eq }) => eq(t.paymentId, razorpay_payment_id)
    });

    if (existingTransaction) {
      return NextResponse.json({
        success: true,
        message: 'Payment already processed',
        credits: existingTransaction.amount
      });
    }

    try {
      await db.transaction(async (tx) => {
        const [userCredit] = await tx
          .select()
          .from(userCredits)
          .where(eq(userCredits.userId, userId))
          .for('update');

        if (userCredit) {
          await tx
            .update(userCredits)
            .set({
              credits: sql`${userCredits.credits} + ${amount}`,
              updatedAt: new Date()
            })
            .where(eq(userCredits.userId, userId));
        } else {
          await tx.insert(userCredits).values({
            userId,
            credits: amount,
            updatedAt: new Date()
          });
        }

        await tx.insert(transactions).values({
          id: uuidv4(),
          userId,
          amount,
          type: 'credit',
          description: `Purchased ${amount} credits`,
          paymentId: razorpay_payment_id,
          createdAt: new Date()
        });
      });

      return NextResponse.json({ success: true, credits: amount });
    } catch (dbError: any) {
      if (dbError.code === '23505') { // PostgreSQL unique violation
        return NextResponse.json({
          success: true,
          message: 'Payment already processed'
        });
      }
      console.error('Database error:', dbError);
      return NextResponse.json({
        error: 'Failed to process payment'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    return NextResponse.json({
      error: 'Error processing payment'
    }, { status: 500 });
  }
} 