"use client";

import React from "react";
import { FaGithub, FaStar, FaCodeFork } from "react-icons/fa6";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const GithubStats = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal" ref={ref}>
          <a
            href="https://github.com/hernandoabella/js-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="inline-flex p-4 rounded-2xl bg-gray-100 dark:bg-slate-700 group-hover:scale-110 transition-transform duration-300">
                <FaGithub className="w-10 h-10 text-gray-700 dark:text-gray-200" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Star on GitHub
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  JS-APPS is open source. Contributions, issues, and stars are always welcome!
                </p>
              </div>
              <div className="flex items-center gap-4 sm:ml-auto">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <FaStar className="w-5 h-5" />
                  <span className="font-bold text-gray-900 dark:text-white">—</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-500">
                  <FaCodeFork className="w-5 h-5" />
                  <span className="font-bold text-gray-900 dark:text-white">—</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
