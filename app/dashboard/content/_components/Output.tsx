import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>
})

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ]
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'list', 'bullet',
  'align',
  'link', 'image'
]

interface OutputProps {
  aiOutput: string
}

function Output({aiOutput}: OutputProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    // Convert plain text to HTML if needed
    setValue(aiOutput)
  }, [aiOutput])

  const handleCopy = () => {
    // Copy the text content without HTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = value
    const textContent = tempDiv.textContent || tempDiv.innerText
    
    navigator.clipboard.writeText(textContent)
      .then(() => {
        toast.success('Content copied!')
      })
      .catch(err => {
        toast.error('Failed to copy!')
        console.error('Failed to copy:', err)
      })
  }

  return (
    <div className='bg-white rounded-lg shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your result</h2>
        <Button onClick={handleCopy} className='flex gap-2'>
          <Copy className="h-4 w-4" />
          Copy
        </Button>
      </div>
      <div className='p-5'>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          className='min-h-[300px] [&_.ql-editor]:min-h-[250px]'
        />
      </div>
    </div>
  )
}

export default Output