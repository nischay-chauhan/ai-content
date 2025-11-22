/**
 * @deprecated This file is deprecated. Use the /api/credits/deduct API route instead.
 * This function should only be called from the client-side and will make an API request.
 * Direct database access from the client is a security risk.
 */

import { toast } from 'sonner';

const FREE_CREDITS = 3;
const MIN_CREDITS_FOR_PAYWALL = 0;

/**
 * @deprecated Use the /api/credits/deduct API route instead
 * This function makes a client-side API call to deduct credits securely
 */
export async function checkAndDeductCredits(userId: string, amount: number = 1) {
  try {
    const response = await fetch('/api/credits/deduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        description: 'Credit deduction'
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 402) {
        toast.error('Insufficient credits. Please purchase more to continue.');
      } else {
        toast.error(data.error || 'Failed to deduct credits');
      }
      throw new Error(data.error || 'Failed to deduct credits');
    }

    return data.remainingCredits;
  } catch (error) {
    console.error('Error managing credits:', error);
    throw error;
  }
} 