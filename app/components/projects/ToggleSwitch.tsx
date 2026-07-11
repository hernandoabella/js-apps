"use client";

import React, { useState } from "react";

const ToggleSwitch = () => {
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-6">
        <div className="text-4xl transition-all duration-300">{on ? "🌙" : "☀️"}</div>
        <button onClick={() => setOn(!on)}
          className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none ${on ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-600"}`}>
          <span className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-all duration-300 flex items-center justify-center text-[10px] ${on ? "translate-x-8" : "translate-x-0"}`}>
            {on ? "🌙" : "☀️"}
          </span>
        </button>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400">{on ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default ToggleSwitch;
