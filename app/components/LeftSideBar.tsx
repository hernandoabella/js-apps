"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/mode-toggle";

const LeftSideBar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-opacity-90 shadow-lg z-20 flex flex-col items-center py-6 space-y-8 border-r">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <div className="text-3xl font-bold font-[var(--font-squada-one)] tracking-widest transition duration-300">
          <span className="text-yellow-400">&lt;/</span>
          <span className="text-yellow-400">JS-</span>
          <span>APPS</span>
        </div>
      </a>

      {/* Get All Apps Button */}
      <div className="relative inline-flex items-center justify-center gap-4 group">
        <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
        <a
          role="button"
          className="text-white  group relative inline-flex items-center justify-center text-sm rounded-xl bg-gray-900 px-6 py-3 font-semibold transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
          title="payment"
          href="https://hernandoabella.gumroad.com/l/hoocc"
        >
          Get All Apps
          <svg
            aria-hidden="true"
            viewBox="0 0 10 10"
            height="10"
            width="10"
            fill="none"
            className="ml-2 -mr-1 stroke-white stroke-2"
          >
            <path
              d="M0 5h7"
              className="transition opacity-0 group-hover:opacity-100"
            ></path>
            <path
              d="M1 1l4 4-4 4"
              className="transition group-hover:translate-x-[3px]" />
          </svg>
        </a>
      </div>

      <a
        href="https://www.github.com/hernandoabella/js-apps"
        className="text-3xl hover:text-gray-500 transition"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <ModeToggle />

    </aside>
  );
};

export default LeftSideBar;
