"use client";

import React, { useState } from "react";

const TextAreaCounter = () => {
  const [text, setText] = useState("");

  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text ? text.split("\n").length : 0;

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[250px] space-y-2">
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} maxLength={200}
          className="w-full p-2.5 text-xs border rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Type something..." />
        <div className="flex justify-around text-center">
          <div><p className="text-lg font-bold text-gray-600 dark:text-gray-300">{chars}</p><p className="text-[10px] text-gray-400 font-medium">Chars</p></div>
          <div><p className="text-lg font-bold text-gray-600 dark:text-gray-300">{words}</p><p className="text-[10px] text-gray-400 font-medium">Words</p></div>
          <div><p className="text-lg font-bold text-gray-600 dark:text-gray-300">{lines}</p><p className="text-[10px] text-gray-400 font-medium">Lines</p></div>
        </div>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-300" style={{ width: `${(chars / 200) * 100}%`, background: chars > 180 ? "#ef4444" : chars > 150 ? "#eab308" : "#3b82f6" }} />
        </div>
      </div>
    </div>
  );
};

export default TextAreaCounter;
