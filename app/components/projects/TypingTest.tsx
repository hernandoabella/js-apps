"use client";

import React, { useState, useRef } from "react";

const SENTENCE = "The quick brown fox jumps over the lazy dog";

const calculateWPM = (typed: string, timeSeconds: number): number => {
  const words = typed.trim().split(/\s+/).length;
  const minutes = timeSeconds / 60;
  return minutes > 0 ? Math.round(words / minutes) : 0;
};

const calculateAccuracy = (typed: string): number => {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === SENTENCE[i]) correct++;
  }
  return SENTENCE.length > 0 ? Math.round((correct / typed.length) * 100) : 100;
};

const TypingTest = () => {
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const startTime = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!started) {
      setStarted(true);
      startTime.current = Date.now();
    }
    setTyped(value);
  };

  const isComplete = typed.length >= SENTENCE.length;

  let wpm = 0;
  let accuracy = 0;
  if (isComplete && startTime.current) {
    const elapsed = (Date.now() - startTime.current) / 1000;
    wpm = calculateWPM(typed, elapsed);
    accuracy = calculateAccuracy(typed);
  }

  const reset = () => {
    setTyped("");
    setStarted(false);
    startTime.current = null;
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center w-96">
        <p className="text-gray-800 dark:text-gray-200 mb-4 italic">{SENTENCE}</p>
        <input
          type="text"
          value={typed}
          onChange={handleChange}
          disabled={isComplete}
          placeholder="Type the sentence above..."
          className="w-full mb-4 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-[#252525] dark:text-gray-200 disabled:opacity-60"
        />
        {isComplete && (
          <div className="text-gray-800 dark:text-gray-200 space-y-1">
            <p>WPM: <span className="font-bold">{wpm}</span></p>
            <p>Accuracy: <span className="font-bold">{accuracy}%</span></p>
            <button onClick={reset} className="mt-3 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingTest;
