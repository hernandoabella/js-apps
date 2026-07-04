"use client";

import React, { useState } from "react";

const DiceRoller = () => {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    if (rolling) return;
    setRolling(true);
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 6) + 1);
    }, 80);
    setTimeout(() => {
      clearInterval(interval);
      setValue(Math.floor(Math.random() * 6) + 1);
      setRolling(false);
    }, 500);
  };

  const dots: Record<number, number[]> = {
    1: [5], 2: [3, 7], 3: [3, 5, 7], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9],
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className={`w-24 h-24 mx-auto bg-white rounded-2xl shadow-inner border-2 border-gray-300 grid grid-cols-3 grid-rows-3 p-2 ${rolling ? "animate-bounce" : ""}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="flex items-center justify-center">
              {dots[value]?.includes(i) && <div className="w-3 h-3 bg-gray-800 rounded-full" />}
            </div>
          ))}
        </div>
        <button onClick={roll} disabled={rolling}
          className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50">Roll Dice</button>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-300">Result: {value}</p>
      </div>
    </div>
  );
};

export default DiceRoller;
