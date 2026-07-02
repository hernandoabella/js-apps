"use client";

import React, { useState, useEffect, useRef } from "react";

const emojis = ["🐶", "🐱", "🐸", "🦊", "🐻", "🐼", "🐨", "🦁"];
const makeCards = () => [...emojis, ...emojis].sort(() => Math.random() - 0.5).map((e, i) => ({ id: i, emoji: e, flipped: false, matched: false }));

const MemoryGame = () => {
  const [game, setGame] = useState(makeCards);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const gameRef = useRef(game);
  gameRef.current = game;

  const flipCard = (id: number) => {
    if (locked || game.find(c => c.id === id)?.flipped) return;
    setGame(g => g.map(c => c.id === id ? { ...c, flipped: true } : c));
    setFlipped(f => [...f, id]);
  };

  useEffect(() => {
    if (flipped.length !== 2) return;
    setLocked(true);
    setMoves(m => m + 1);
    const [a, b] = flipped;
    const g = gameRef.current;
    const cardA = g.find(c => c.id === a)!;
    const cardB = g.find(c => c.id === b)!;
    if (cardA.emoji === cardB.emoji) {
      setGame(g => g.map(c => c.id === a || c.id === b ? { ...c, matched: true } : c));
      setFlipped([]);
      setLocked(false);
    } else {
      setTimeout(() => {
        setGame(g => g.map(c => c.id === a || c.id === b ? { ...c, flipped: false } : c));
        setFlipped([]);
        setLocked(false);
      }, 800);
    }
  }, [flipped]);

  const matched = game.filter(c => c.matched).length;
  const won = matched === game.length;

  if (won) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center">
          <p className="text-4xl mb-2">🎉</p>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-200">You won!</p>
          <p className="text-sm text-gray-500 mb-4">{moves} moves</p>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold">Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-4 rounded-lg border-2">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-3">Moves: {moves}</div>
        <div className="grid grid-cols-4 gap-2">
          {game.map(card => (
            <button
              key={card.id}
              onClick={() => flipCard(card.id)}
              className={`w-14 h-14 rounded-xl text-2xl flex items-center justify-center transition-all duration-300 ${
                card.flipped || card.matched
                  ? "bg-white dark:bg-gray-600 shadow-md scale-100"
                  : "bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg hover:scale-105"
              }`}
            >
              {(card.flipped || card.matched) && <span>{card.emoji}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
