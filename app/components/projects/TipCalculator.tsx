"use client";

import React, { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("50");
  const [tipPercent, setTipPercent] = useState(15);

  const billNum = parseFloat(bill) || 0;
  const tipAmount = billNum * (tipPercent / 100);
  const total = billNum + tipAmount;

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-6 rounded-lg border-2 w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Bill Amount</label>
          <input
            type="number"
            value={bill}
            onChange={e => setBill(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Tip: {tipPercent}%</label>
          <input
            type="range"
            min={0}
            max={30}
            value={tipPercent}
            onChange={e => setTipPercent(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0%</span><span>30%</span>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg space-y-1">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>Tip Amount:</span>
            <span className="font-semibold">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
