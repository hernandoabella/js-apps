"use client";

import React from "react";
import { apps } from "@/app/appData";
import { FaCheckCircle, FaCircle, FaStar } from "react-icons/fa";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const levelData = [
  { level: 1, label: "Rookie", color: "bg-emerald-500", textColor: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-900/20" },
  { level: 2, label: "Novice", color: "bg-blue-500", textColor: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
  { level: 3, label: "Pro", color: "bg-purple-500", textColor: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-900/20" },
  { level: 4, label: "Master", color: "bg-orange-500", textColor: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-50 dark:bg-orange-900/20" },
  { level: 5, label: "Ninja", color: "bg-red-500", textColor: "text-red-600 dark:text-red-400", bgColor: "bg-red-50 dark:bg-red-900/20" },
];

const LevelsRoadmap = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-3">
            Progression Path
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your learning roadmap
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start as a Rookie and work your way up to Ninja. Each level unlocks harder, more rewarding projects.
          </p>
        </div>

        <div ref={ref} className="reveal space-y-6">
          {levelData.map((lv, idx) => {
            const levelApps = apps.filter(a => a.level === lv.level);
            return (
              <div key={lv.level} className="relative">
                {/* Timeline dot + line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 last:hidden" style={{ display: idx === levelData.length - 1 ? "none" : undefined }} />
                <div className={`hidden md:flex absolute left-6 top-6 w-5 h-5 rounded-full ${lv.color} ring-4 ring-white dark:ring-slate-900 z-10 items-center justify-center`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className={`md:ml-16 rounded-2xl border border-gray-200 dark:border-gray-700 ${lv.bgColor} p-6 hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold text-white ${lv.color}`}>
                      Level {lv.level}
                    </div>
                    <span className={`font-semibold ${lv.textColor}`}>{lv.label}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: lv.level }).map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
                      {levelApps.length} project{levelApps.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {levelApps.map(app => (
                      <div key={app.name} className="flex items-center gap-2.5 bg-white dark:bg-slate-800 rounded-xl px-4 py-2.5 border border-gray-100 dark:border-gray-600">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{app.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LevelsRoadmap;
