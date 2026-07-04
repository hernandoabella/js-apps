"use client";

import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("25");
  const [fahrenheit, setFahrenheit] = useState("77");

  const handleCelsius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const c = e.target.value;
    setCelsius(c);
    if (c === "") { setFahrenheit(""); return; }
    const num = parseFloat(c);
    if (!isNaN(num)) setFahrenheit(Math.round((num * 9/5 + 32) * 100) / 100 + "");
  };

  const handleFahrenheit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.value;
    setFahrenheit(f);
    if (f === "") { setCelsius(""); return; }
    const num = parseFloat(f);
    if (!isNaN(num)) setCelsius(Math.round((num - 32) * 5/9 * 100) / 100 + "");
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-4">
      <div className="w-full max-w-xs space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Celsius</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsius}
            placeholder="°C"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-mono text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="text-center text-gray-400 dark:text-gray-500 text-lg font-semibold">⇅</div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Fahrenheit</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheit}
            placeholder="°F"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-mono text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
