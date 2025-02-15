'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

export default function BillingPage() {
  const { user } = useUser();
  const [amount, setAmount] = useState(100);

  const handlePayment = async () => {
    try {
      // Create order
      const orderResponse = await fetch('/api/razorpay', {
        method: 'POST',
        body: JSON.stringify({ amount }),
      });
      const { orderId } = await orderResponse.json();

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "Your Company",
        description: "Credits Purchase",
        order_id: orderId,
        handler: async (response: any) => {
          const verifyResponse = await fetch('/api/razorpay/verify', {
            method: 'POST',
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount,
            }),
          });

          if (verifyResponse.ok) {
            alert('Payment successful!');
          }
        },
        prefill: {
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Purchase Credits</h1>
      <div className="mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 rounded"
          min="100"
        />
      </div>
      <button
        onClick={handlePayment}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Pay ₹{amount}
      </button>
    </div>
  );
}