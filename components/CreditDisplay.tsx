'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface CreditDisplayProps {
  refreshTrigger?: number;
}

export default function CreditDisplay({ refreshTrigger = 0 }: CreditDisplayProps) {
  const { user } = useUser();
  const [credits, setCredits] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user?.id) {
      fetchCredits();
    }
  }, [user, refreshTrigger]);

  const fetchCredits = async () => {
    try {
      const response = await fetch(`/api/credits?userId=${user?.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch credits');
      }
      const data = await response.json();
      setCredits(data.credits);
    } catch (error) {
      console.error('Failed to fetch credits:', error);
      toast.error('Failed to load credits');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <span className="text-sm font-medium text-gray-600">Credits Remaining</span>
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-primary">
          {credits === null ? '...' : credits}
        </span>
        {credits !== null && credits <= 1 && (
          <Button 
            onClick={() => router.push('/dashboard/billings')}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Buy Credits
          </Button>
        )}
      </div>
    </div>
  );
} 