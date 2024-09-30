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
  const selectedPrompt = Data?.find((item) => item.slug === params.slug);
  const [loading , setLoading] = useState<boolean>(false)
  const [output , setOutput] = useState<string>("")

  const generateAiContent = async(form: any) => {
    setLoading(true)
    const selectedPromptAI = selectedPrompt?.aiPrompt; 
    const prompt = JSON.stringify(form) + " " + selectedPromptAI;
    console.log(prompt)
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text()) 
    setOutput(result.response.text());
    setLoading(false)

  }

  if (!selectedPrompt) {
    return <div>Prompt not found</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      <FormComponent loading={loading} selectedPrompt={selectedPrompt} userFormInput={(data:any) => generateAiContent(data)} />
     <div className='col-span-2'>
     <Output output={output} />
     </div>
    </div>
  );
}

export default CreateContent;
