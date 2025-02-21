'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Gem, Zap, Star } from "lucide-react";
import CreditDisplay from '@/components/CreditDisplay';
import { toast } from 'sonner';

const PRICING_PLANS = [
  {
    name: "Basic",
    credits: 100,
    price: 499,
    features: [
      "100 AI Credits",
      "Basic Support",
      "24/7 Customer Service",
      "Access to All Templates"
    ],
    icon: CreditCard
  },
  {
    name: "Pro",
    credits: 500,
    price: 1999,
    features: [
      "500 AI Credits",
      "Priority Support",
      "Advanced Analytics",
      "Custom Templates"
    ],
    icon: Gem,
    popular: true
  },
  {
    name: "Enterprise",
    credits: 2000,
    price: 4999,
    features: [
      "2000 AI Credits",
      "Dedicated Support",
      "Custom Solutions",
      "API Access"
    ],
    icon: Star
  }
];

export default function BillingPage() {
  const { user } = useUser();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePayment = async (plan: typeof PRICING_PLANS[0]) => {
    if (!mounted || typeof window === 'undefined') {
      return;
    }
    
    try {
      const orderResponse = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: plan.price }),
      });
      const { orderId } = await orderResponse.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: plan.price * 100,
        currency: "INR",
        name: "AI Content Generator",
        description: `${plan.name} Plan - ${plan.credits} Credits`,
        order_id: orderId,
        handler: async (response: any) => {
          const verifyResponse = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: plan.credits
            }),
          });

          if (verifyResponse.ok) {
            toast.success('Payment successful! Credits added to your account.');
            setRefreshTrigger(prev => prev + 1);
          }
        },
        prefill: {
          name: user?.fullName ?? '',
          email: user?.primaryEmailAddress?.emailAddress ?? '',
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error('Payment failed. Please try again.');
    }
  };

  if (!mounted) {
    return null; // or a loading state
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Billing & Credits</h1>
        <p className="text-muted-foreground">
          Purchase credits to use our AI services (1 Credit = ₹5)
        </p>
      </div>

      <div className="mb-8">
        <CreditDisplay refreshTrigger={refreshTrigger} />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {PRICING_PLANS.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <div className="flex items-center gap-2">
                <plan.icon className="w-6 h-6 text-primary" />
                <CardTitle>{plan.name}</CardTitle>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p className="mt-2">
                  <span className="text-2xl font-bold text-foreground">₹{plan.price}</span>
                  <span> for {plan.credits} credits</span>
                </p>
                <p className="text-sm mt-1">
                  (₹{(plan.price / plan.credits).toFixed(2)}/credit)
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => handlePayment(plan)}
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Purchase Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}