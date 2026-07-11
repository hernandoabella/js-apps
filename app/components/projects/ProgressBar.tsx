"use client";

import React, { useState, useEffect, useRef } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) { setRunning(false); return 100; }
          return prev + 2;
        });
      }, 100);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const reset = () => { setRunning(false); setProgress(0); };

  const color = progress < 40 ? "bg-red-500" : progress < 70 ? "bg-yellow-500" : "bg-green-500";

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4 w-full max-w-[220px]">
        <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          <div className={`h-full rounded-full transition-all duration-200 ${color}`} style={{ width: `${progress}%` }} />
        </div>
        <p className="text-2xl font-bold text-gray-600 dark:text-gray-300">{progress}%</p>
        <div className="flex justify-center gap-2">
          <button onClick={() => setRunning(!running)}
            className={`px-4 py-2 rounded-xl text-xs font-bold shadow transition-all ${running ? "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300" : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"}`}>
            {running ? "Pause" : "Start"}
          </button>
          <button onClick={reset} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl text-xs font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
