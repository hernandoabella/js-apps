"use client";

import React, { useState } from "react";

const ContrastChecker = () => {
  const [fg, setFg] = useState("#1f2937");
  const [bg, setBg] = useState("#ffffff");

  const luminance = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const [rl, gl, bl] = [r, g, b].map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
  };

  const l1 = luminance(fg);
  const l2 = luminance(bg);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const passAA = ratio >= 4.5;
  const passAAA = ratio >= 7;

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[240px] space-y-3">
        <div className="h-20 rounded-xl flex items-center justify-center font-bold text-lg shadow-inner border border-gray-200 dark:border-gray-600" style={{ color: fg, backgroundColor: bg }}>
          Sample Text
        </div>
        <div className="flex justify-center gap-3">
          <label className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Text</span>
            <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" />
          </label>
          <label className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Bg</span>
            <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0" />
          </label>
        </div>
        <div className="text-center space-y-1">
          <p className="text-xl font-bold text-gray-600 dark:text-gray-300">{ratio.toFixed(2)}:1</p>
          <div className="flex justify-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${passAA ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"}`}>AA {passAA ? "✅" : "❌"}</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${passAAA ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"}`}>AAA {passAAA ? "✅" : "❌"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContrastChecker;
