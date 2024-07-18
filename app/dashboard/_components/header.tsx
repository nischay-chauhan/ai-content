import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-4 shadow-lg border-b-2 flex items-center justify-between'>
        <div className='flex gap-2 max-w-md items-center p-2 rounded-md'>
            <Search />
            <Input placeholder="Search"  />
        </div>
        <div className='flex gap-2 bg-primary py-4 px-1 rounded-full'>
            <h2 className=' text-xs text-white px-2'>
                Join Membership just for $19.9
            </h2>
        </div>
    </div>
  )
}

export default Header