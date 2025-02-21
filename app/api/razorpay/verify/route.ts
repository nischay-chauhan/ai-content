import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import { userCredits, transactions } from '@/utils/schema';
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

      try {
        const userCredit = await db.query.userCredits.findFirst({
        where: (credits, { eq }) => eq(credits.userId, userId)
      });

      if (userCredit) {
        await db.update(userCredits)
          .set({ 
            credits: userCredit.credits + amount,
            updatedAt: new Date()
          })
          .where(eq(userCredits.userId, userId));
      } else {
        await db.insert(userCredits).values({
          userId,
          credits: amount,
          updatedAt: new Date()
        });
      }

      await db.insert(transactions).values({
        id: uuidv4(),
        userId,
        amount,
        type: 'credit',
        description: `Purchased ${amount} credits`,
        paymentId: razorpay_payment_id,
        createdAt: new Date()
      });

      return NextResponse.json({ success: true });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ error: 'Failed to process payment' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    return NextResponse.json({ error: 'Error processing payment' }, { status: 500 });
  }
} 