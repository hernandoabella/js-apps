"use client";

import React, { useState, useRef, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const start = () => {
    if (!running) {
      setRunning(true);
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => setTime(Date.now() - startTime), 10);
    }
  };

  const stop = () => {
    setRunning(false);
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  };

  const reset = () => { stop(); setTime(0); setLaps([]); };

  const lap = () => { if (running) setLaps((prev) => [time, ...prev]); };

  const format = (ms: number) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const cs = Math.floor((ms % 1000) / 10);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-3 w-full max-w-[220px]">
        <div className="text-4xl font-mono font-bold tabular-nums text-gray-800 dark:text-gray-100 tracking-wider">{format(time)}</div>
        <div className="flex justify-center gap-2">
          {!running ? (
            <button onClick={start} className="px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold text-xs shadow hover:shadow-md transition-all">Start</button>
          ) : (
            <button onClick={stop} className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-lg font-bold text-xs shadow hover:shadow-md transition-all">Stop</button>
          )}
          <button onClick={lap} disabled={!running} className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold text-xs shadow hover:shadow-md transition-all disabled:opacity-40">Lap</button>
          <button onClick={reset} className="px-4 py-1.5 bg-gradient-to-r from-gray-500 to-slate-500 text-white rounded-lg font-bold text-xs shadow hover:shadow-md transition-all">Reset</button>
        </div>
        {laps.length > 0 && (
          <div className="max-h-[80px] overflow-y-auto text-xs font-mono text-gray-500 dark:text-gray-400 space-y-0.5">
            {laps.map((l, i) => (
              <div key={i} className="flex justify-between gap-4"><span>Lap {laps.length - i}</span><span>{format(l)}</span></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
