"use client";

import React, { useState, useEffect, useRef } from "react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      if (seconds > 0) setSeconds(s => s - 1);
      else if (minutes > 0) { setMinutes(m => m - 1); setSeconds(59); }
      else {
        clearInterval(intervalRef.current!);
        setRunning(false);
        if (mode === "work") { setMode("break"); setMinutes(5); setSeconds(0); }
        else { setMode("work"); setMinutes(25); setSeconds(0); }
      }
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, minutes, seconds, mode]);

  const toggle = () => setRunning(r => !r);
  const reset = () => {
    setRunning(false);
    setMinutes(mode === "work" ? 25 : 5);
    setSeconds(0);
  };

  const fmt = (n: number) => String(n).padStart(2, "0");
  const pct = mode === "work"
    ? ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100
    : ((5 * 60 - (minutes * 60 + seconds)) / (5 * 60)) * 100;

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center w-72">
        <div className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
          {mode === "work" ? "Focus Time" : "Break Time"}
        </div>
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" className="dark:stroke-gray-600" />
            <circle cx="50" cy="50" r="42" fill="none" stroke={mode === "work" ? "#3b82f6" : "#10b981"} strokeWidth="8" strokeDasharray={`${2 * Math.PI * 42}`} strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`} className="transition-all duration-1000" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-mono font-bold text-gray-800 dark:text-gray-200">{fmt(minutes)}:{fmt(seconds)}</span>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={toggle} className={`px-6 py-2 rounded-lg text-white font-semibold text-sm ${running ? "bg-amber-500 hover:bg-amber-600" : "bg-green-500 hover:bg-green-600"} transition-colors`}>
            {running ? "Pause" : "Start"}
          </button>
          <button onClick={reset} className="px-6 py-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded-lg font-semibold text-sm transition-colors">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
