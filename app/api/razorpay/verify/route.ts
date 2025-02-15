import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import { credits, transactions } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET!)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Add credits to user's account
    await db.transaction(async (tx) => {
      const userCredits = await tx.query.credits.findFirst({
        where: (credits, { eq }) => eq(credits.userId, userId)
      });

      if (userCredits) {
        await tx.update(credits)
          .set({ balance: userCredits.balance + amount })
          .where(eq(credits.userId, userId));
      } else {
        await tx.insert(credits).values({
          id: uuidv4(),
          userId,
          balance: amount
        });
      }

      await tx.insert(transactions).values({
        id: uuidv4(),
        userId,
        amount,
        type: 'credit',
        description: 'Payment successful',
        paymentId: razorpay_payment_id
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error processing payment' }, { status: 500 });
  }
} 