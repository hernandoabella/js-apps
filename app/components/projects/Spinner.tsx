"use client";

import React, { useState } from "react";

const types = ["spinner", "dots", "pulse", "ring"];

const Spinner = () => {
  const [type, setType] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[200px] p-3 space-y-4">
      <div className="flex items-center justify-center h-24">
        {type === 0 && (
          <div className="w-10 h-10 border-4 border-gray-200 dark:border-gray-700 border-t-[#DE9804] rounded-full animate-spin" />
        )}
        {type === 1 && (
          <div className="flex gap-2">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-3 h-3 bg-[#DE9804] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        )}
        {type === 2 && (
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="w-2 h-8 bg-[#DE9804] rounded-full" style={{ animation: `pulse 1s ease-in-out ${i * 0.1}s infinite` }} />
            ))}
          </div>
        )}
        {type === 3 && (
          <svg className="animate-spin h-10 w-10 text-[#DE9804]" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
      </div>
      <style>{`@keyframes pulse { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }`}</style>
      <div className="flex gap-2">
        {types.map((t, i) => (
          <button key={i} onClick={() => setType(i)}
            className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-colors ${type === i ? "bg-[#DE9804] text-white" : "bg-gray-100 dark:bg-[#303030] text-gray-600 dark:text-gray-400"}`}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
