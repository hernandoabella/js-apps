"use client";

import React, { useState } from "react";

const PLATFORMS = [
  { name: "Twitter", color: "bg-[#1DA1F2]", icon: "𝕏" },
  { name: "Facebook", color: "bg-[#1877F2]", icon: "f" },
  { name: "LinkedIn", color: "bg-[#0A66C2]", icon: "in" },
  { name: "Copy", color: "bg-gray-500", icon: "🔗" },
];

const ShareButtons = () => {
  const [msg, setMsg] = useState("");

  const share = (name: string) => {
    setMsg(`Shared on ${name}! 🔥`);
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Share this page:</p>
        <div className="flex justify-center gap-2">
          {PLATFORMS.map(p => (
            <button key={p.name} onClick={() => share(p.name)}
              className={`${p.color} text-white w-10 h-10 rounded-xl text-xs font-bold shadow hover:scale-110 transition-all`}>
              {p.icon}
            </button>
          ))}
        </div>
        {msg && <p className="text-xs font-bold text-green-600 dark:text-green-400 animate-bounce-subtle">{msg}</p>}
      </div>
    </div>
  );
};

export default ShareButtons;
