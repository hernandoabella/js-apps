"use client";

import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center">
        <p className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          {count}
        </p>
        <div className="flex gap-3">
          <button onClick={() => setCount(c => c - 1)} className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold">-</button>
          <button onClick={() => setCount(0)} className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold">Reset</button>
          <button onClick={() => setCount(c => c + 1)} className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold">+</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
