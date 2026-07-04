"use client";

import React, { useState } from "react";

const LightBulb = () => {
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl transition-all duration-300 ${on ? "bg-yellow-300 text-yellow-600 shadow-lg shadow-yellow-300/50" : "bg-gray-200 dark:bg-gray-600 text-gray-400"}`}>
          {on ? "💡" : "🔌"}
        </div>
        <button onClick={() => setOn(!on)}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all ${on ? "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300" : "bg-gradient-to-r from-yellow-500 to-amber-500 text-white"}`}>
          {on ? "Turn Off" : "Turn On"}
        </button>
      </div>
    </div>
  );
};

export default LightBulb;
