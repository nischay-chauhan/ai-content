"use client";
import React, { useState } from "react";
import SearchSec from "./_components/searrch";
import PromptArea from "./_components/promts";

function Dashboard() {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const onsearch = (value: string) => {
    setSearchInput(value);
  };
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 p-8 space-y-8">
        <SearchSec onSearch={onsearch} />
        <PromptArea searchInput={searchInput} />
      </div>
    </div>
  );
}

export default Dashboard;
