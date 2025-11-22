"use client";
import React from "react";
import { PromptAreaProps } from "@/interface/interface";
import Link from "next/link";
import { motion } from "framer-motion";

function PromptCard({
  name,
  desc,
  icon: Icon,
  category,
  slug,
  aiPrompt,
  form,
}: PromptAreaProps) {
  return (
    <Link href={`/dashboard/content/${slug}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative p-5 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer aspect-[4/3] flex flex-col justify-between overflow-hidden"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="p-3 bg-gradient-to-br from-violet-100 to-rose-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-violet-600" />
            </div>
            <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3">{desc}</p>
          </div>
        </div>

        <div className="flex items-center text-violet-600 font-medium text-sm mt-4 group-hover:translate-x-2 transition-transform duration-300">
          Try now
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}

export default PromptCard;
