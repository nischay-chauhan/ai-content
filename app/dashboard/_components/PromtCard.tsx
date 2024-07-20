import React from 'react';
import { PromptAreaProps } from '@/interface/interface';

function PromptCard({ name, desc, icon: Icon, category, slug, aiPrompt, form }: PromptAreaProps) {
  return (
    <div className='p-4 gap-y-2 border shadow-md bg-white flex flex-col rounded cursor-pointer hover:scale-105 transition-all'>
      <div className='flex items-center'>
        <Icon className='w-6 h-6 mr-2' />
        <p className='text-lg font-bold text-black'>{name}</p>
      </div>
      <p className='text-muted-foreground line-clamp-3'>{desc}</p>
    </div>
  );
}

export default PromptCard;
