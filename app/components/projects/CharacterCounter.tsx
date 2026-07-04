"use client";

import React, { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text ? text.split("\n").length : 0;
  const charsNoSpace = text.replace(/\s/g, "").length;

  return (
    <div className="flex items-center justify-center h-full min-h-[240px] p-3">
      <div className="w-full max-w-xs space-y-3">
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste your text here..."
          className="w-full h-24 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Characters", value: chars },
            { label: "Words", value: words },
            { label: "Lines", value: lines },
            { label: "No Spaces", value: charsNoSpace },
          ].map(item => (
            <div key={item.label} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-xl font-bold text-indigo-500">{item.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;
