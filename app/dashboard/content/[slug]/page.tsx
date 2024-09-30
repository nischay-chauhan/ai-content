"use client";
import React from 'react';
import FormComponent from '../_components/form-component';
import Output from '../_components/Output';
import Data from '@/app/(doc)/Data';
import { PromptAreaProps } from '@/interface/interface';

interface CreateContentProps {
  params: {
    slug: string;
  };
}

function CreateContent({ params }: CreateContentProps) {
  const selectedPrompt = Data?.find((item) => item.slug === params.slug);
  const generateAiContent = (form: any) => {

  }

  if (!selectedPrompt) {
    return <div>Prompt not found</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      <FormComponent selectedPrompt={selectedPrompt} userFormInput={(data:any) => console.log(data)} />
     <div className='col-span-2'>
     <Output />
     </div>
    </div>
  );
}

export default CreateContent;
