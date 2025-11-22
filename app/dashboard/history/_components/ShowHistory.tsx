'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, ChevronDown, ChevronUp, Calendar, FileText } from "lucide-react";
import Link from "next/link";

interface HistoryProps {
  item: {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string | null;
    createdBy: string | null;
    createdAt: Date | null;
  }
}

const ShowHistory = ({ item }: HistoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 100;

  const aiResponse = item.aiResponse || '';
  const shouldTruncate = aiResponse.length > MAX_LENGTH;
  const displayText = shouldTruncate && !isExpanded
    ? aiResponse.substring(0, MAX_LENGTH) + '...'
    : aiResponse;

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-gray-900">
              {item.templateSlug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Untitled'}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {item.createdAt && new Date(item.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {aiResponse.length} characters
              </div>
            </div>
          </div>
          <Link href={`/dashboard/content/${item.templateSlug}?edit=${item.id}`}>
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-600 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-700 whitespace-pre-wrap break-words">
            {displayText}
          </p>
        </div>

        {shouldTruncate && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 text-violet-600 hover:text-violet-700 hover:bg-violet-50"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Read more
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ShowHistory;