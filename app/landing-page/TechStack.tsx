"use client";

import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const techs = [
  { icon: <FaHtml5 className="w-8 h-8" />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3 className="w-8 h-8" />, name: "CSS3", color: "text-blue-500" },
  { icon: <FaJs className="w-8 h-8" />, name: "JavaScript", color: "text-yellow-500" },
  { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-blue-600" },
  { icon: <FaReact className="w-8 h-8" />, name: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-gray-900 dark:text-white" },
  { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS", color: "text-teal-400" },
  { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js", color: "text-green-600" },
];

const TechStack = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-3">
          Built With
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Modern tech stack
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          JS-APPS is built with the tools you already want to learn.
        </p>

        <div ref={ref} className="reveal flex flex-wrap items-center justify-center gap-6">
          {techs.map(tech => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-28"
            >
              <span className={tech.color}>{tech.icon}</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
