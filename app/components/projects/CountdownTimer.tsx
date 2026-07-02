"use client";

import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  const [totalSecs, setTotalSecs] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [inputMinutes, setInputMinutes] = useState("5");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) { setRunning(false); return 0; }
        return r - 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const start = () => {
    const secs = parseInt(inputMinutes) * 60 || 300;
    setTotalSecs(secs);
    setRemaining(secs);
    setRunning(true);
  };

  const pause = () => setRunning(false);
  const reset = () => { setRunning(false); setRemaining(totalSecs); };

  const fmt = (n: number) => String(n).padStart(2, "0");
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  const pct = totalSecs > 0 ? ((totalSecs - remaining) / totalSecs) * 100 : 0;

  return (
    <div className="flex items-center justify-center h-full min-h-[300px] p-2">
      <div className="dark:bg-[#303030] p-8 rounded-xl border-2 text-center w-80">
        {!running && remaining === 0 ? (
          <>
            <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Minutes</label>
            <input
              type="number"
              value={inputMinutes}
              onChange={e => setInputMinutes(e.target.value)}
              min={1}
              className="w-28 text-center px-4 py-3 border rounded-xl text-2xl dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-6"
            />
            <button onClick={start} className="block w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-base">Start Countdown</button>
          </>
        ) : (
          <>
            <div className="relative w-44 h-44 mx-auto mb-5">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" className="dark:stroke-gray-600" />
                <circle cx="50" cy="50" r="42" fill="none" stroke={remaining < 10 ? "#ef4444" : "#3b82f6"} strokeWidth="8" strokeDasharray={`${2 * Math.PI * 42}`} strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`} className="transition-all duration-1000" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-mono font-bold text-gray-800 dark:text-gray-200">{fmt(m)}:{fmt(s)}</span>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              {running ? (
                <button onClick={pause} className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm">Pause</button>
              ) : (
                <button onClick={() => setRunning(true)} className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm">Resume</button>
              )}
              <button onClick={reset} className="px-6 py-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded-xl font-bold text-sm">Reset</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
