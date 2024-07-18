
import React from 'react'
import Sidebar from './_components/sidebar';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <div className=' md:w-64 md:block fixed hidden'>
            <Sidebar />
        </div>
     <div className='md:ml-64'>
     {children}
     </div>
    </div>
  )
}

export default layout