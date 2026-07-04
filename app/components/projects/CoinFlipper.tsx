"use client";

import React, { useState } from "react";

const CoinFlipper = () => {
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [flipping, setFlipping] = useState(false);

  const flip = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      const r = Math.random() < 0.5 ? "heads" : "tails";
      setResult(r);
      setFlipping(false);
    }, 600);
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className={`w-24 h-24 mx-auto rounded-full border-4 border-yellow-500 flex items-center justify-center text-3xl font-bold transition-all duration-600 ${flipping ? "animate-spin" : ""} ${result === "heads" ? "bg-amber-100 text-amber-600" : result === "tails" ? "bg-gray-200 text-gray-600" : "bg-yellow-50 text-yellow-500"}`}>
          {flipping ? "?" : result === "heads" ? "H" : result === "tails" ? "T" : "?"}
        </div>
        <button onClick={flip} disabled={flipping}
          className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50">Flip Coin</button>
        {result && !flipping && <p className="text-sm font-bold text-gray-600 dark:text-gray-300 capitalize">{result}!</p>}
      </div>
    </div>
  );
};

export default CoinFlipper;
