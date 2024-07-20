import React from 'react';
import data from '@/app/(doc)/Data'; 
import { PromptAreaProps } from '@/interface/interface';
import PromptCard from './PromtCard';

function PromptArea() {
  return (
    <div>
      {data.map((item: PromptAreaProps , index: number) => (
        <PromptCard 
          key={index}  
          name={item.name}
          desc={item.desc}
          icon={item.icon}
          category={item.category}
          slug={item.slug}
          aiPrompt={item.aiPrompt}
          form={item.form}
        />
      ))}
    </div>
  );
}

export default PromptArea;
