"use client";

import React, { useState } from "react";

type Choice = "rock" | "paper" | "scissors";

const choices: Choice[] = ["rock", "paper", "scissors"];
const emoji: Record<Choice, string> = { rock: "🪨", paper: "📄", scissors: "✂️" };

const getComputerChoice = (): Choice => choices[Math.floor(Math.random() * 3)];

const getResult = (player: Choice, computer: Choice): string => {
  if (player === computer) return "It's a draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
};

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState("");

  const play = (player: Choice) => {
    const computer = getComputerChoice();
    setPlayerChoice(player);
    setComputerChoice(computer);
    setResult(getResult(player, computer));
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center">
        <div className="flex gap-3 mb-6">
          {choices.map(c => (
            <button key={c} onClick={() => play(c)} className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold text-2xl">
              {emoji[c]} {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
        {playerChoice && (
          <div className="text-gray-800 dark:text-gray-200 space-y-2">
            <p>You: {emoji[playerChoice]}</p>
            <p>Computer: {emoji[computerChoice!]}</p>
            <p className="font-bold text-xl mt-2">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RockPaperScissors;
