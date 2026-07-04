"use client";

import React, { useState } from "react";

const DIRECTIONS = ["to right", "to bottom", "to bottom right", "to right top"];

const GradientBuilder = () => {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");
  const [dir, setDir] = useState(0);

  const gradient = `linear-gradient(${DIRECTIONS[dir]}, ${color1}, ${color2})`;

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-3 w-full max-w-[240px]">
        <div className="h-24 rounded-2xl shadow-inner border-2 border-gray-200 dark:border-gray-600 transition-all duration-300" style={{ background: gradient }} />
        <div className="flex justify-center gap-3">
          <label className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Start</span>
            <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" />
          </label>
          <label className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase">End</span>
            <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" />
          </label>
        </div>
        <div className="flex justify-center gap-1">
          {DIRECTIONS.map((d, i) => (
            <button key={d} onClick={() => setDir(i)}
              className={`px-2 py-1 text-[10px] rounded-lg font-bold transition-all ${i === dir ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"}`}>
              {d === "to right" ? "→" : d === "to bottom" ? "↓" : d === "to bottom right" ? "↘" : "↗"}
            </button>
          ))}
        </div>
        <p className="text-[9px] font-mono text-gray-400 truncate px-2">{gradient}</p>
      </div>
    </div>
  );
};

export default GradientBuilder;
