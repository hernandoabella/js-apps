"use client";

import React, { useState } from "react";

const MOODS = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😍", label: "Love" },
];

const MoodBoard = () => {
  const [mood, setMood] = useState(0);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className="text-6xl transition-all duration-300 hover:scale-110">{MOODS[mood].emoji}</div>
        <p className="text-lg font-bold text-gray-600 dark:text-gray-300">{MOODS[mood].label}</p>
        <div className="flex justify-center gap-2">
          {MOODS.map((m, i) => (
            <button key={i} onClick={() => setMood(i)}
              className={`text-2xl w-10 h-10 rounded-xl transition-all ${i === mood ? "scale-125 bg-gray-200 dark:bg-gray-600 shadow" : "opacity-50 hover:opacity-80"}`}>
              {m.emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;
