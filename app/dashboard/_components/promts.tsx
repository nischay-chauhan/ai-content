import Data from '@/app/(doc)/Data';
import { PromptAreaProps } from '@/interface/interface';
import React from 'react';

function PromptArea() {
  return (
    <div>
      {Data.map((item: PromptAreaProps, i: number) => (
        <div className='p-2 rounded' key={item.aiPrompt}>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <p className='text-lg font-bold text-black'>{item.name}</p>
            <p className='text-gray-600'>{item.desc}</p>
            <p className='text-gray-500'>{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PromptArea;
