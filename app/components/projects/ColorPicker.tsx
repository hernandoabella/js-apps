"use client";

import React, { useState } from "react";

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#6366f1", "#a855f7", "#ec4899", "#1f2937", "#6b7280"];

const ColorPicker = () => {
  const [selected, setSelected] = useState("#ef4444");

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-2xl shadow-inner border-2 border-gray-200 dark:border-gray-600 transition-all duration-300"
          style={{ backgroundColor: selected }} />
        <div className="flex justify-center gap-1.5 flex-wrap max-w-[200px]">
          {COLORS.map((c) => (
            <button key={c}
              className={`w-7 h-7 rounded-full border-2 transition-all ${selected === c ? "border-white scale-110 shadow" : "border-transparent"}`}
              style={{ backgroundColor: c }}
              onClick={() => setSelected(c)} />
          ))}
        </div>
        <p className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">{selected}</p>
      </div>
    </div>
  );
};

export default ColorPicker;
