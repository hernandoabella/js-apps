"use client";

import React, { useState } from "react";

const VowelCounter = () => {
  const [text, setText] = useState("");

  const countVowels = (str: string) => {
    const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const ch of str.toLowerCase()) {
      if (ch in counts) counts[ch as keyof typeof counts]++;
    }
    return counts;
  };

  const counts = countVowels(text);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full mb-4 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-[#252525] dark:text-gray-200"
        />
        <div className="text-left text-gray-800 dark:text-gray-200 space-y-1">
          <p>A: {counts.a}</p>
          <p>E: {counts.e}</p>
          <p>I: {counts.i}</p>
          <p>O: {counts.o}</p>
          <p>U: {counts.u}</p>
          <p className="font-bold mt-2">Total: {total}</p>
        </div>
      </div>
    </div>
  );
};

export default VowelCounter;
