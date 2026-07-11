"use client";

import React, { useState } from "react";

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#6366f1", "#a855f7", "#ec4899"];

const ColorFlipper = () => {
  const [color, setColor] = useState("#3b82f6");
  const [label, setLabel] = useState("Blue");

  const flip = () => {
    const i = Math.floor(Math.random() * COLORS.length);
    setColor(COLORS[i]);
    const names = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Purple", "Pink"];
    setLabel(names[i]);
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-2xl shadow-inner border-2 border-gray-200 dark:border-gray-600 transition-all duration-500" style={{ backgroundColor: color }} />
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 font-mono">{label}</p>
        <button onClick={flip} className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all">Flip Color</button>
      </div>
    </div>
  );
};

export default ColorFlipper;
