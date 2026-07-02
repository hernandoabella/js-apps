"use client";

import React from "react";
import { FaBolt, FaFire, FaGem, FaTrophy } from "react-icons/fa";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const ProgressPreview = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-3">
          Gamification
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Learning feels like a game
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Earn XP, track streaks, unlock achievements, and watch yourself level up in real time.
        </p>

        <div ref={ref} className="reveal bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl max-w-2xl mx-auto">
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white text-sm font-bold shadow-lg">
              <FaGem className="w-4 h-4" />
              Level 3 &mdash; Coder
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl text-white text-sm font-bold shadow-lg">
              <FaBolt className="w-4 h-4" />
              450 XP
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-400 to-rose-500 rounded-xl text-white text-sm font-bold shadow-lg">
              <FaFire className="w-4 h-4" />
              5 day streak
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-green-600 rounded-xl text-white text-sm font-bold shadow-lg">
              <FaTrophy className="w-4 h-4" />
              3 achievements
            </div>
          </div>

          {/* XP Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>Level 3</span>
              <span>Level 4</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full transition-all duration-700" />
            </div>
          </div>

          {/* Level badges */}
          <div className="flex items-center justify-between gap-2">
            {["Beginner", "Apprentice", "Coder", "Developer", "Architect", "Master", "Legend"].map((title, i) => (
              <div
                key={title}
                className={`flex flex-col items-center gap-1 ${i < 3 ? "opacity-100" : "opacity-30 dark:opacity-20"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  i < 3
                    ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600"
                }`}>
                  {i + 1}
                </div>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 whitespace-nowrap">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressPreview;
