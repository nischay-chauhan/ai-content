'use client';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import ShowHistory from './_components/ShowHistory';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SortAsc, SortDesc } from "lucide-react";

export default function HistoryPage() {
  const { user } = useUser();
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    if (user?.id) {
      fetchHistory();
    }
  }, [user, sortOrder]);

  const fetchHistory = async () => {
    try {
      const response = await fetch(`/api/history?userId=${user?.id}&sort=${sortOrder}`);
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error('Failed to fetch history:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredHistory = history.filter(item => 
    item.aiResponse?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.templateSlug?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search in history..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="flex gap-2"
        >
          {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
          Sort
        </Button>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : filteredHistory.length > 0 ? (
        <div className="grid gap-4">
          {filteredHistory.map((item) => (
            <ShowHistory key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No history found</div>
      )}
    </div>
  );
}