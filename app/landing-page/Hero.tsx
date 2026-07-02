import React from "react";
import Link from "next/link";
import { FaArrowRight, FaRocket, FaCode, FaStar, FaLayerGroup, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900" />
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-1/4 text-blue-300 dark:text-blue-500/30 animate-bounce-subtle" style={{ animationDelay: "0.5s" }}>
        <FaCode className="w-12 h-12" />
      </div>
      <div className="absolute bottom-40 right-1/4 text-purple-300 dark:text-purple-500/30 animate-bounce-subtle" style={{ animationDelay: "1.5s" }}>
        <FaStar className="w-10 h-10" />
      </div>
      <div className="absolute top-1/2 right-12 text-indigo-300 dark:text-indigo-500/30 animate-bounce-subtle" style={{ animationDelay: "2.5s" }}>
        <FaLayerGroup className="w-8 h-8" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium border border-indigo-200 dark:border-indigo-800">
            <FaRocket className="w-3.5 h-3.5" />
            20 projects &bull; 5 levels &bull; 10 achievements
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-medium border border-emerald-200 dark:border-emerald-800">
            <FaGithub className="w-3.5 h-3.5" />
            100% Free & Open Source
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
          Master JavaScript
          <br />
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text">Through Projects</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build real projects, earn XP, unlock achievements, and level up from
          <span className="font-semibold text-indigo-600 dark:text-indigo-400"> Rookie </span>
          to
          <span className="font-semibold text-orange-600 dark:text-orange-400"> Legend</span>
          — one app at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Start Learning
            <FaArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/hernandoabella/js-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <FaGithub className="w-5 h-5" />
            View on GitHub
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">20</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">5</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Levels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">10</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">100%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Free</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
