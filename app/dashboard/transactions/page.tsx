'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from 'sonner';
import { format } from 'date-fns';

interface Transaction {
  id: string;
  amount: number;
  type: string;
  description: string;
  paymentId: string;
  createdAt: string;
}

export default function TransactionsPage() {
  const { user } = useUser();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      fetchTransactions();
    }
  }, [user]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('/api/transactions');
      if (!response.ok) throw new Error('Failed to fetch transactions');
      const data = await response.json();
      setTransactions(data.transactions);
    } catch (error) {
      toast.error('Failed to load transactions');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Transaction History</h1>
        <p className="text-muted-foreground">
          View your credit purchase history
        </p>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <Card key={transaction.id}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex flex-col">
                <span className="font-medium">{transaction.description}</span>
                <span className="text-sm text-muted-foreground">
                  {format(new Date(transaction.createdAt), 'PPP p')}
                </span>
                <span className="text-sm text-muted-foreground">
                  Payment ID: {transaction.paymentId}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-lg font-bold ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}{transaction.amount} credits
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {transactions.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              No transactions found
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 