"use client";

import React, { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState(["react", "css", "js"]);
  const [input, setInput] = useState("");

  const addTag = () => {
    const tag = input.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setInput("");
    }
  };

  const removeTag = (tag: string) => setTags(tags.filter(t => t !== tag));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addTag();
  };

  return (
    <div className="flex items-start justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[240px] space-y-2">
        <div className="flex gap-1">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Escribe y presiona Enter..."
            className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#252525] text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DE9804]"
          />
          <button onClick={addTag}
            className="px-3 py-2 text-xs font-bold text-white bg-[#DE9804] rounded-lg hover:bg-[#c88a04] transition-colors">
            +
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5 min-h-[32px]">
          {tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-white bg-[#DE9804] rounded-full">
              {tag}
              <button onClick={() => removeTag(tag)} className="hover:text-red-200 transition-colors">×</button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagInput;
