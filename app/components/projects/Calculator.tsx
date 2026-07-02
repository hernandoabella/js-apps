"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [reset, setReset] = useState(false);

  const inputNum = (n: string) => {
    if (reset) { setDisplay(n); setReset(false); }
    else setDisplay(d => d === "0" ? n : d + n);
  };

  const inputOp = (nextOp: string) => {
    if (op && !reset) calculate();
    setPrev(parseFloat(display));
    setOp(nextOp);
    setReset(true);
  };

  const calculate = () => {
    if (prev === null || !op) return;
    const curr = parseFloat(display);
    let result = 0;
    switch (op) {
      case "+": result = prev + curr; break;
      case "-": result = prev - curr; break;
      case "*": result = prev * curr; break;
      case "/": result = curr === 0 ? 0 : prev / curr; break;
    }
    setDisplay(String(result));
    setPrev(null);
    setOp(null);
    setReset(true);
  };

  const clear = () => { setDisplay("0"); setPrev(null); setOp(null); };

  const btn = (label: string, cls = "bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500") => (
    <button onClick={() => /[0-9.]/.test(label) ? inputNum(label) : inputOp(label)} className={`${cls} rounded-lg text-lg font-semibold text-gray-800 dark:text-white`}>
      {label}
    </button>
  );

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-4 rounded-lg border-2 w-64">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-3 text-right text-2xl font-mono font-bold text-gray-800 dark:text-white truncate">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={clear} className="col-span-2 bg-red-400 hover:bg-red-500 text-white rounded-lg text-lg font-semibold py-2">C</button>
          <button onClick={() => { setDisplay("0"); setPrev(null); setOp(null); }} className="bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400 text-gray-800 dark:text-white rounded-lg text-lg font-semibold">CE</button>
          {btn("/", "bg-orange-400 hover:bg-orange-500 text-white")}
          {["7","8","9"].map(n => btn(n))}
          {btn("*", "bg-orange-400 hover:bg-orange-500 text-white")}
          {["4","5","6"].map(n => btn(n))}
          {btn("-", "bg-orange-400 hover:bg-orange-500 text-white")}
          {["1","2","3"].map(n => btn(n))}
          {btn("+", "bg-orange-400 hover:bg-orange-500 text-white")}
          {btn("0")}
          {btn(".")}
          <button onClick={calculate} className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
