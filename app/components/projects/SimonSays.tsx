"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const COLORS = ["#ef4444", "#22c55e", "#3b82f6", "#eab308"];
const COLOR_NAMES = ["red", "green", "blue", "yellow"];

const SimonSays = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerStep, setPlayerStep] = useState(0);
  const [phase, setPhase] = useState<"idle" | "showing" | "playing" | "gameover">("idle");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const startGame = () => {
    const first = Math.floor(Math.random() * 4);
    setSequence([first]);
    setPlayerStep(0);
    setScore(0);
    setPhase("showing");
  };

  useEffect(() => {
    if (phase !== "showing" || sequence.length === 0) return;
    let i = 0;
    const showNext = () => {
      if (i >= sequence.length) {
        setActiveIdx(null);
        setPhase("playing");
        return;
      }
      setActiveIdx(sequence[i]);
      timeoutRef.current = setTimeout(() => {
        setActiveIdx(null);
        timeoutRef.current = setTimeout(showNext, 300);
      }, 500);
      i++;
    };
    showNext();
    return clearTimers;
  }, [phase, sequence, clearTimers]);

  const handleClick = (idx: number) => {
    if (phase !== "playing") return;
    setActiveIdx(idx);
    setTimeout(() => setActiveIdx(null), 200);
    if (idx !== sequence[playerStep]) {
      setPhase("gameover");
      return;
    }
    const next = playerStep + 1;
    if (next >= sequence.length) {
      setScore(score + 1);
      setPlayerStep(0);
      setPhase("showing");
      const newSeq = [...sequence, Math.floor(Math.random() * 4)];
      setSequence(newSeq);
    } else {
      setPlayerStep(next);
    }
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[240px] p-3">
      <div className="text-center">
        <div className="grid grid-cols-2 gap-2 w-40 h-40 mx-auto mb-3">
          {COLORS.map((color, i) => (
            <button key={i} onClick={() => handleClick(i)}
              className="rounded-xl transition-all duration-150 border-2 border-gray-300 dark:border-gray-600"
              style={{
                backgroundColor: activeIdx === i ? color : `${color}55`,
                transform: activeIdx === i ? "scale(0.92)" : "scale(1)",
                boxShadow: activeIdx === i ? `0 0 20px ${color}` : "none",
              }} />
          ))}
        </div>
        {phase === "idle" && (
          <button onClick={startGame} className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm shadow-md">Start Game</button>
        )}
        {phase === "gameover" && (
          <div>
            <p className="text-sm font-bold text-red-500 mb-2">Game Over! Score: {score}</p>
            <button onClick={startGame} className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm shadow-md">Play Again</button>
          </div>
        )}
        {phase !== "idle" && phase !== "gameover" && (
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{phase === "showing" ? "Watch..." : `Score: ${score}`}</p>
        )}
      </div>
    </div>
  );
};

export default SimonSays;
