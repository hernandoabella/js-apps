"use client";

import React from "react";
import { FaMousePointer, FaCode, FaArrowUp } from "react-icons/fa";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const steps = [
  {
    icon: <FaMousePointer className="w-7 h-7" />,
    title: "Choose a Project",
    desc: "Pick from 15 projects across 5 difficulty levels — from a simple Number Generator to a full Pomodoro Timer.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaCode className="w-7 h-7" />,
    title: "Write Real Code",
    desc: "Follow step-by-step instructions for HTML, CSS, and JavaScript. Type your solution and get instant feedback with built-in validation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaArrowUp className="w-7 h-7" />,
    title: "Earn XP & Level Up",
    desc: "Earn 15 XP per step and 100 XP per project. Level up from Beginner to Legend, unlock achievements, and track your streak.",
    color: "from-amber-500 to-orange-500",
  },
];

const HowItWorks = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-3">
            How It Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Three steps to mastery
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No setup, no downloads. Just pick a project and start coding.
          </p>
        </div>

        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className={`relative z-10 inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-xl mb-6`}>
                {step.icon}
              </div>
              <div className="absolute top-8 right-[calc(50%+2rem)] hidden md:flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm font-bold">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
