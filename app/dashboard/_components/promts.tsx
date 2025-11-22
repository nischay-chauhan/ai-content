import React, { useEffect } from 'react';
import data from '@/app/(doc)/Data';
import { PromptAreaProps } from '@/interface/interface';
import PromptCard from './PromtCard';

interface seachProps {
  searchInput: string
}

function PromptArea({ searchInput }: seachProps) {
  const [promt, setPromts] = React.useState<PromptAreaProps[]>(data)

  useEffect(() => {
    if (searchInput.length > 0) {
      setPromts(data.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase())))
    } else {
      setPromts(data)
    }
  }, [searchInput])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8'>
      {promt.map((item: PromptAreaProps, index: number) => (
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
