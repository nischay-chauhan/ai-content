"use client";
import React, { useState } from 'react';
import FormComponent from '../_components/form-component';
import Output from '../_components/Output';
import Data from '@/app/(doc)/Data';
import { PromptAreaProps } from '@/interface/interface';
import { chatSession } from '@/utils/aiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { checkAndDeductCredits } from '@/utils/creditManager';
import { toast } from 'sonner';
import CreditDisplay from '@/components/CreditDisplay';

interface CreateContentProps {
  params: {
    slug: string;
  };
}

function CreateContent({ params }: CreateContentProps) {
  const [loading , setLoading] = useState(false)
  const [aiOutput , setAiOutput] = useState<string>('')
  const selectedPrompt = Data?.find((item) => item.slug === params.slug);
  const {user} = useUser()

  const generateAiContent = async(form: any) => {
    try {
      if (!user?.id) {
        toast.error('Please sign in to continue');
        return;
      }

      setLoading(true);
      
      // Check and deduct credits
      await checkAndDeductCredits(user.id);
      
      const promt = selectedPrompt?.aiPrompt;
      const finalPrompt = JSON.stringify(form) + (promt);

      const result = await chatSession.sendMessage(finalPrompt);
      setAiOutput(result?.response.text());
      await saveInDb(form, selectedPrompt?.slug, result?.response.text());
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to generate content');
    } finally {
      setLoading(false);
    }
  }

  const saveInDb = async (formdata: any, slug: any, aiOutput: string) => {
    try {
      if (!user?.id) throw new Error('User not authenticated');
      
      const result = await db.insert(AIOutput).values({
        userId: user.id,
        formData: formdata,
        templateSlug: slug,
        aiResponse: aiOutput,
        createdBy: user?.primaryEmailAddress?.emailAddress || 'unknown',
      });
      
      return result;
    } catch (error) {
      console.error('Error inserting into DB:', error);
      throw error;
    }
  };
  

  if (!selectedPrompt) {
    return <div>Prompt not found</div>;
  }

  return (
    <div className='space-y-5 p-5'>
      <CreditDisplay />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <FormComponent selectedPrompt={selectedPrompt} loading={loading} userFormInput={(data:any) => generateAiContent(data)} />
        <div className='col-span-2'>
          <Output aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
