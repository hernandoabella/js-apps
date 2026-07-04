"use client";

import React, { useState } from "react";

const conversions: Record<string, { label: string; units: { name: string; toBase: (n: number) => number; fromBase: (n: number) => number }[] }> = {
  length: {
    label: "Length",
    units: [
      { name: "Meters", toBase: n => n, fromBase: n => n },
      { name: "Kilometers", toBase: n => n * 1000, fromBase: n => n / 1000 },
      { name: "Centimeters", toBase: n => n / 100, fromBase: n => n * 100 },
      { name: "Inches", toBase: n => n * 0.0254, fromBase: n => n / 0.0254 },
      { name: "Feet", toBase: n => n * 0.3048, fromBase: n => n / 0.3048 },
    ],
  },
  weight: {
    label: "Weight",
    units: [
      { name: "Kilograms", toBase: n => n, fromBase: n => n },
      { name: "Grams", toBase: n => n / 1000, fromBase: n => n * 1000 },
      { name: "Pounds", toBase: n => n * 0.453592, fromBase: n => n / 0.453592 },
      { name: "Ounces", toBase: n => n * 0.0283495, fromBase: n => n / 0.0283495 },
    ],
  },
};

const UnitConverter = () => {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("Meters");
  const [toUnit, setToUnit] = useState("Feet");
  const [value, setValue] = useState("10");
  const [result, setResult] = useState("");

  const convert = () => {
    const cat = conversions[category];
    const from = cat.units.find(u => u.name === fromUnit);
    const to = cat.units.find(u => u.name === toUnit);
    if (!from || !to) return;
    const num = parseFloat(value);
    if (isNaN(num)) { setResult("Enter a valid number"); return; }
    const inBase = from.toBase(num);
    const converted = to.fromBase(inBase);
    setResult(`${num} ${fromUnit} = ${Math.round(converted * 1000000) / 1000000} ${toUnit}`);
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[240px] p-3">
      <div className="w-full max-w-xs space-y-3">
        <div className="flex gap-2">
          {Object.keys(conversions).map(cat => (
            <button key={cat} onClick={() => { setCategory(cat); setResult(""); }}
              className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${category === cat ? "bg-blue-500 text-white shadow" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"}`}>
              {conversions[cat].label}
            </button>
          ))}
        </div>
        <input type="number" value={value} onChange={e => setValue(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <div className="flex gap-2">
          <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}
            className="flex-1 px-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-medium focus:outline-none">
            {conversions[category].units.map(u => <option key={u.name}>{u.name}</option>)}
          </select>
          <span className="flex items-center text-gray-400 text-sm font-bold">→</span>
          <select value={toUnit} onChange={e => setToUnit(e.target.value)}
            className="flex-1 px-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-medium focus:outline-none">
            {conversions[category].units.map(u => <option key={u.name}>{u.name}</option>)}
          </select>
        </div>
        <button onClick={convert}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all">Convert</button>
        {result && (
          <div className="text-center text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 py-2 rounded-lg">{result}</div>
        )}
      </div>
    </div>
  );
};

export default UnitConverter;
