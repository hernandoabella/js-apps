import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FaGithub, FaRocket } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="shadow-lg fixed w-full z-20 top-0 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <div className="mx-auto max-w-7xl flex items-center justify-between py-4 px-4 md:px-10">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-3xl font-bold font-[var(--font-squada-one)] tracking-widest hover:text-yellow-300 transition duration-300">
              <span className="text-yellow-400">&lt;/</span>JSAPPS
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <FaRocket className="w-3.5 h-3.5" />
              Projects
            </Link>
            <a
              href="https://github.com/hernandoabella/js-apps"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
