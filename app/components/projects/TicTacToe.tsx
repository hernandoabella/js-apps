"use client";

import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [xNext, setXNext] = useState(true);

  const winner = calcWinner(board);
  const draw = !winner && board.every(c => c);

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = xNext ? "X" : "O";
    setBoard(next);
    setXNext(!xNext);
  };

  const reset = () => {
    setBoard(Array(9).fill(""));
    setXNext(true);
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-6 rounded-lg border-2 text-center">
        <div className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">
          {winner ? `Winner: ${winner}` : draw ? "Draw!" : `Turn: ${xNext ? "X" : "O"}`}
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="w-16 h-16 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-2xl font-bold text-gray-800 dark:text-white transition-colors"
            >
              {cell}
            </button>
          ))}
        </div>
        <button onClick={reset} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold">Reset</button>
      </div>
    </div>
  );
};

function calcWinner(sq: string[]): string | null {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a,b,c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
  }
  return null;
}

export default TicTacToe;
