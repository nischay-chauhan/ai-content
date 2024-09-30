import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
function Output() {
  const editorRef = React.useRef<Editor>(null);
  return (
    <div className='bg-white rounded-lg shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your result</h2>
        <Button className='flex gap-2'><Copy />Copy</Button>
      </div>
    <Editor
        initialValue="Your result will be displayed here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="600px"
        ref = {editorRef}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default Output