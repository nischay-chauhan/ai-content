
import React from 'react'
import Sidebar from './_components/sidebar';
import Header from './_components/header';

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
        <Header />
     {children}
     </div>
    </div>
  )
}

export default layout