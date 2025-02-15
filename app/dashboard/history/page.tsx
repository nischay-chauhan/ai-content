'use client';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { getHistory } from '@/utils/getHistory';
import ShowHistory from './_components/ShowHistory';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SortAsc, SortDesc } from "lucide-react";

type HistoryItem = {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string | null;
  createdBy: string | null;
  createdAt: Date | null;
};

const HistoryPage = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const [data, setData] = useState<HistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        const historyData = await getHistory(email);
        setData(historyData);
      }
    };

    fetchData();
  }, [email]);

  const validSortByProperties = ['id', 'formData', 'aiResponse', 'templateSlug', 'createdBy', 'createdAt'];

  if (!validSortByProperties.includes(sortBy)) {
    throw new Error(`Invalid sortBy property: ${sortBy}`);
  }
  
  

  const filteredAndSortedData = data
    .filter((item) =>
      item.formData.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.templateSlug!.toLowerCase().includes(searchTerm.toLowerCase())
    )
    

    if (!validSortByProperties.includes(sortBy)) {
  throw new Error(`Invalid sortBy property: ${sortBy}`);
}


  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <div className="flex space-x-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search by form data or template slug"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      
      </div>
      {filteredAndSortedData.length > 0 ? (
        filteredAndSortedData.map((item: HistoryItem) => (
          <ShowHistory
            key={item.id}
            id={item.id}
            formData={item.formData}
            aiResponse={item.aiResponse}
            templateSlug={item.templateSlug}
            createdBy={item.createdBy}
            createdAt={item.createdAt}
          />
        ))
      ) : (
        <p>No history found.</p>
      )}
    </div>
  );
};

export default HistoryPage;