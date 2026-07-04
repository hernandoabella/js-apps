"use client";

import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h) return;
    const hMeters = h / 100;
    const value = w / (hMeters * hMeters);
    setBmi(Math.round(value * 10) / 10);
    if (value < 18.5) setCategory("Underweight");
    else if (value < 25) setCategory("Normal");
    else if (value < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  const getColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi < 25) return "text-emerald-500";
    if (bmi < 30) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[260px] p-3">
      <div className="w-full max-w-xs space-y-3">
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Weight (kg)"
          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Height (cm)"
          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button onClick={calculate}
          className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">Calculate BMI</button>
        {bmi !== null && (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className={`text-3xl font-bold ${getColor()}`}>{bmi}</div>
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">{category}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
