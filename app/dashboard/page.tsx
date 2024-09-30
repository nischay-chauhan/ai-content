"use client"
import React from 'react'
import SearchSec from './_components/searrch'
import PromptArea from './_components/promts'

function Dashboard() {
  const [searchInput , setSearchInput] = React.useState<string>('')
  const onsearch = (value: string) => {
    setSearchInput(value)
  }
  return (
    <div className=''>
      <SearchSec onSearch={onsearch}/>
      <PromptArea searchInput={searchInput} />
    </div>
  )
}

export default Dashboard
