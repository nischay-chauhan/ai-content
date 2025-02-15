'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

export default function CreditDisplay() {
  const { user } = useUser();
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    if (user?.id) {
      fetchCredits();
    }
  }, [user]);

  const fetchCredits = async () => {
    try {
      const response = await fetch(`/api/credits?userId=${user?.id}`);
      const data = await response.json();
      setCredits(data.credits);
    } catch (error) {
      console.error('Failed to fetch credits');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <span className="text-sm font-medium text-gray-600">Credits Remaining</span>
      <span className="text-lg font-bold text-primary">
        {credits === null ? '...' : credits}
      </span>
    </div>
  );
} 