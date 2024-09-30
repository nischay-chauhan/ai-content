"use client"
import React from 'react';
import { PromptAreaProps } from '@/interface/interface';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface FormComponentProps {
  selectedPrompt: PromptAreaProps;
  userFormInput: any,
  loading : boolean,
}

function FormComponent({ selectedPrompt , userFormInput , loading}: FormComponentProps) {
    const [form, setForm] = React.useState<any>({})
    const handleChange = (e:any) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})        
    }
    const OnSubmit = (e:any) => {
        e.preventDefault();
        userFormInput(form)
    }
  return (
    <div className='p-5 bg-white gap-y-2 border shadow-md'>
        <selectedPrompt.icon className=' w-8 h-8 ' />
     <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedPrompt.name}</h2>
     <p className='text-muted-foreground text-md'>{selectedPrompt.desc}</p>

     <form onSubmit={OnSubmit} className='mt-6 flex flex-col gap-3'>
        {selectedPrompt.form?.map((item, index) => (
            <div className='flex flex-col gap-2 mb-10 ' key={index}>
                <label className=' text-primary font-bold'>{item.label}</label>
                {item.field == 'input'? 
                <Input name={item.name} required={item?.required} onChange={handleChange}/> : item.field == 'textarea' ? <Textarea name={item.name} required={item?.required} onChange={handleChange}/> : null}
            </div>
        ))}

        <Button type='submit' disabled={loading} className='py-6 w-full'>
          {loading ?  <Loader2Icon className='animate-spin' /> : "Generate Content"}</Button>
     </form>
    </div>
  );
}

export default FormComponent;
