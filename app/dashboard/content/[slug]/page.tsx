"use client";
import React, { useState } from 'react';
import FormComponent from '../_components/form-component';
import Output from '../_components/Output';
import Data from '@/app/(doc)/Data';
import { PromptAreaProps } from '@/interface/interface';
import { chatSession } from '@/utils/aiModal';

interface CreateContentProps {
  params: {
    slug: string;
  };
}

function CreateContent({ params }: CreateContentProps) {
  const [loading , setLoading] = useState(false)
  const selectedPrompt = Data?.find((item) => item.slug === params.slug);

  const generateAiContent = async(form: any) => {
    setLoading(true)
    const promt = selectedPrompt?.aiPrompt;
    const finalPrompt =JSON.stringify(form)+ (promt);

    const result = await chatSession.sendMessage(finalPrompt);
    console.log(result.response.text());
    setLoading(false)

  }

  if (!selectedPrompt) {
    return <div>Prompt not found</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      <FormComponent selectedPrompt={selectedPrompt} loading={loading} userFormInput={(data:any) => generateAiContent(data)} />
     <div className='col-span-2'>
     <Output />
     </div>
    </div>
  );
}

export default CreateContent;
