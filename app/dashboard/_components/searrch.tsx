import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

function SearchSec() {
    return (
        <div className="flex flex-col h-[30vh] justify-center items-center  bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC]">
            <div className='text-center mb-8 '>
                <h1 className="text-3xl font-bold text-black">Borwse Templates</h1>
                <p className="text-lg text-black">Browse through our collection of templates</p>
            </div>
          <div className="w-[50%] h-16 bg-white rounded-full shadow-lg flex items-center px-4">
            <SearchIcon className="w-6 h-6 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="flex-1 bg-transparent border-none focus:outline-none" />
          </div>
        </div>
    )
}

export default SearchSec