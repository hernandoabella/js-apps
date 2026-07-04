"use client";

import React, { useState } from "react";

const quotes = [
  "The best way to predict the future is to create it.",
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Talk is cheap. Show me the code.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast.",
  "Any fool can write code that a computer can understand.",
  "The only way to learn a new programming language is by writing programs in it.",
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [author] = useState("Unknown");

  const next = () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-3 max-w-[260px]">
        <div className="text-xs italic text-gray-600 dark:text-gray-300 leading-relaxed min-h-[48px] flex items-center justify-center">
          &ldquo;{quote}&rdquo;
        </div>
        <p className="text-[10px] text-gray-400 dark:text-gray-500">&mdash; {author}</p>
        <button onClick={next}
          className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all">New Quote</button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
