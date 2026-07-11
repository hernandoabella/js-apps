"use client";

import React, { useState, useEffect, useRef } from "react";

const TEXTS = [
  "Hello, World!",
  "Welcome to JS-APPS",
  "Learn by doing 🚀",
  "Code, build, repeat!",
];

const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = TEXTS[idx];
    if (!deleting && charIdx < current.length) {
      timeoutRef.current = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(charIdx + 1); }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(charIdx - 1); }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((idx + 1) % TEXTS.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIdx, deleting, idx]);

  const reset = () => { setText(""); setIdx(0); setCharIdx(0); setDeleting(false); };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-5 shadow-inner min-w-[200px]">
          <p className="text-lg font-mono text-green-400 min-h-[28px]">
            {text}<span className="animate-pulse">|</span>
          </p>
        </div>
        <button onClick={reset} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl text-xs font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">↻ Restart</button>
      </div>
    </div>
  );
};

export default TypewriterEffect;
