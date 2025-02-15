import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import { credits, transactions } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { amount } = await req.json();

    const order = await razorpay.orders.create({
      amount: amount * 100, 
      currency: 'INR',
      receipt: uuidv4(),
    });

    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
  }
} 