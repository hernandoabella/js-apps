"use client";

import React, { useState } from "react";

const questions = [
  { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"], ans: 0 },
  { q: "Which CSS property changes text color?", opts: ["font-color", "text-color", "color", "foreground"], ans: 2 },
  { q: "How do you declare a variable in JS?", opts: ["var x", "let x", "const x", "All of the above"], ans: 3 },
];

const QuizApp = () => {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const answer = (optIdx: number) => {
    if (selected !== null) return;
    setSelected(optIdx);
    if (optIdx === questions[idx].ans) setScore(s => s + 1);
  };

  const next = () => {
    if (idx < questions.length - 1) { setIdx(i => i + 1); setSelected(null); }
    else setDone(true);
  };

  const restart = () => { setIdx(0); setScore(0); setSelected(null); setDone(false); };

  if (done) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center">
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">{score}/{questions.length}</p>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{score === questions.length ? "Perfect!" : "Keep practicing!"}</p>
          <button onClick={restart} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold">Restart</button>
        </div>
      </div>
    );
  }

  const q = questions[idx];
  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-6 rounded-lg border-2 w-full max-w-sm">
        <p className="text-xs text-gray-500 mb-2">Question {idx + 1} of {questions.length}</p>
        <p className="font-bold text-gray-800 dark:text-gray-200 mb-4">{q.q}</p>
        <div className="space-y-2">
          {q.opts.map((opt, i) => {
            let cls = "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200";
            if (selected !== null) {
              if (i === q.ans) cls = "bg-green-400 text-white";
              else if (i === selected) cls = "bg-red-400 text-white";
              else cls = "bg-gray-100 dark:bg-gray-700 text-gray-400";
            }
            return (
              <button key={i} onClick={() => answer(i)} className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${cls}`}>
                {opt}
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <button onClick={next} className="mt-4 w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold">
            {idx < questions.length - 1 ? "Next" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
