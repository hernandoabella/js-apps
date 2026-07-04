"use client";

import React, { useState, useCallback } from "react";

const WORDS = ["react", "javascript", "typescript", "python", "developer", "hangman", "coding", "function", "variable", "component"];

const HangmanGame = () => {
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const startGame = useCallback(() => {
    const w = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(w);
    setGuessed(new Set());
    setWrong(0);
    setGameOver(false);
    setWon(false);
  }, []);

  const guess = (letter: string) => {
    if (gameOver || won) return;
    const next = new Set(guessed);
    next.add(letter);
    setGuessed(next);
    if (!word.includes(letter)) {
      const w = wrong + 1;
      setWrong(w);
      if (w >= 6) setGameOver(true);
    } else {
      const display = word.split("").map(l => next.has(l) ? l : "_").join("");
      if (!display.includes("_")) setWon(true);
    }
  };

  const display = word.split("").map(l => guessed.has(l) ? l : "_").join(" ");
  const remaining = "abcdefghijklmnopqrstuvwxyz".split("").filter(l => !guessed.has(l));

  return (
    <div className="flex items-center justify-center h-full min-h-[260px] p-3">
      <div className="w-full max-w-xs text-center space-y-3">
        {word ? (
          <>
            <svg viewBox="0 0 100 120" className="w-20 h-24 mx-auto">
              <line x1="20" y1="110" x2="80" y2="110" stroke="#d1d5db" strokeWidth="2" />
              <line x1="50" y1="110" x2="50" y2="10" stroke="#d1d5db" strokeWidth="2" />
              <line x1="50" y1="10" x2="80" y2="10" stroke="#d1d5db" strokeWidth="2" />
              <line x1="80" y1="10" x2="80" y2="30" stroke="#d1d5db" strokeWidth="2" />
              {wrong > 0 && <circle cx="80" cy="38" r="8" stroke="#ef4444" strokeWidth="2" fill="none" />}
              {wrong > 1 && <line x1="80" y1="46" x2="80" y2="70" stroke="#ef4444" strokeWidth="2" />}
              {wrong > 2 && <line x1="80" y1="55" x2="65" y2="65" stroke="#ef4444" strokeWidth="2" />}
              {wrong > 3 && <line x1="80" y1="55" x2="95" y2="65" stroke="#ef4444" strokeWidth="2" />}
              {wrong > 4 && <line x1="80" y1="70" x2="68" y2="90" stroke="#ef4444" strokeWidth="2" />}
              {wrong > 5 && <line x1="80" y1="70" x2="92" y2="90" stroke="#ef4444" strokeWidth="2" />}
            </svg>
            <div className="text-xl font-mono font-bold tracking-widest text-gray-900 dark:text-white">{display}</div>
            {gameOver && <div className="text-sm font-bold text-red-500">Game Over! Word: {word}</div>}
            {won && <div className="text-sm font-bold text-emerald-500">You Won!</div>}
            {(gameOver || won) ? (
              <button onClick={startGame} className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm shadow-md">Play Again</button>
            ) : (
              <div className="flex flex-wrap gap-1 justify-center max-w-[240px] mx-auto">
                {remaining.map(l => (
                  <button key={l} onClick={() => guess(l)}
                    className="w-7 h-7 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 rounded-md text-xs font-bold transition-all">{l}</button>
                ))}
              </div>
            )}
          </>
        ) : (
          <button onClick={startGame} className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm shadow-md">Start Game</button>
        )}
      </div>
    </div>
  );
};

export default HangmanGame;
