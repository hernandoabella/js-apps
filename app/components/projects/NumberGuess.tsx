"use client";

import React, { useState } from "react";

const NumberGuess = () => {
  const [target] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100");
  const [attempts, setAttempts] = useState(0);
  const [done, setDone] = useState(false);

  const check = () => {
    const val = parseInt(guess);
    if (isNaN(val)) return;
    setAttempts(attempts + 1);
    if (val === target) { setMessage(`Correct! You got it in ${attempts + 1} tries! 🎉`); setDone(true); }
    else if (val < target) setMessage("Too low! Try higher.");
    else setMessage("Too high! Try lower.");
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-3 w-full max-w-[220px]">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Attempts: {attempts}</p>
        <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} onKeyDown={(e) => e.key === "Enter" && check()}
          disabled={done}
          className="w-full px-3 py-2 text-center text-lg font-bold border rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
          placeholder="1-100" min="1" max="100" />
        <div className="flex justify-center gap-2">
          <button onClick={check} disabled={done}
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all disabled:opacity-50">Guess</button>
          <button onClick={reset}
            className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-bold text-xs hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">New</button>
        </div>
        <p className={`text-xs font-bold ${done ? "text-green-600 dark:text-green-400" : "text-gray-500 dark:text-gray-400"}`}>{message}</p>
      </div>
    </div>
  );
};

export default NumberGuess;
