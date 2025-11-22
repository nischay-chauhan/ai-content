import { UserButton } from "@/components/UserButton";
import { Search, Sparkles } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b border-gray-100 bg-white flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-gray-50 hidden md:flex">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent text-gray-700 w-full"
        />
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex gap-2 items-center bg-gradient-to-r from-violet-600 to-rose-600 p-1 rounded-full px-3 cursor-pointer hover:scale-105 transition-all">
          <Sparkles className="w-4 h-4 text-white" />
          <h2 className="text-xs font-bold text-white">Join Membership</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;