"use client";

import React, { useState } from "react";

const LIGHTS = [
  { color: "red", active: "bg-red-500 shadow-lg shadow-red-500/50", inactive: "bg-red-200 dark:bg-red-900/30" },
  { color: "yellow", active: "bg-yellow-400 shadow-lg shadow-yellow-400/50", inactive: "bg-yellow-200 dark:bg-yellow-900/30" },
  { color: "green", active: "bg-green-500 shadow-lg shadow-green-500/50", inactive: "bg-green-200 dark:bg-green-900/30" },
];

const TrafficLight = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="space-y-3">
        <div className="bg-gray-800 dark:bg-gray-700 rounded-2xl p-3 space-y-2 shadow-lg">
          {LIGHTS.map((l, i) => (
            <div key={l.color}
              className={`w-10 h-10 rounded-full transition-all duration-300 ${i === active ? l.active : l.inactive}`} />
          ))}
        </div>
        <div className="flex justify-center gap-2">
          <button onClick={() => setActive(0)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${active === 0 ? "bg-red-500 text-white shadow" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"}`}>Red</button>
          <button onClick={() => setActive(1)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${active === 1 ? "bg-yellow-400 text-white shadow" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"}`}>Yellow</button>
          <button onClick={() => setActive(2)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${active === 2 ? "bg-green-500 text-white shadow" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"}`}>Green</button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
