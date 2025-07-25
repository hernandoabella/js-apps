"use client";

import React from "react";
import { FaGithub, FaRocket, FaBook, FaUser, FaHome, FaSearch } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LeftSideBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome className="text-lg" /> },
    { name: "Tutorials", href: "/tutorials", icon: <FaBook className="text-lg" /> },
    { name: "About", href: "/about", icon: <FaUser className="text-lg" /> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-background/90 shadow-lg z-20 flex flex-col items-center py-6 space-y-8 border-r">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 group">
        <div className="text-3xl font-bold font-[var(--font-squada-one)] tracking-widest transition duration-300 group-hover:text-yellow-400">
          <span className="text-yellow-400">&lt;/</span>
          <span className="text-yellow-400">JS-</span>
          <span>APPS</span>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="w-full px-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search apps..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="w-full px-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${pathname === link.href
              ? "bg-yellow-400/10 text-yellow-400 border-l-4 border-yellow-400"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            <span className={pathname === link.href ? "text-yellow-400" : "text-gray-500"}>
              {link.icon}
            </span>
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* Get All Apps Button */}
      <div className="w-full px-4">
        <div className="relative inline-flex items-center justify-center w-full group">
          <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
          <a
            role="button"
            className="relative w-full text-center text-white group inline-flex items-center justify-center text-sm rounded-xl bg-gray-900 px-6 py-3 font-semibold transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            title="Get All Apps"
            href="https://hernandoabella.gumroad.com/l/hoocc"
          >
            <FaRocket className="mr-2" />
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
              />
              <path
                d="M1 1l4 4-4 4"
                className="transition group-hover:translate-x-[3px]"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* GitHub Link */}
      <div className="mt-auto w-full px-4 space-y-4">
        <a
          href="https://www.github.com/hernandoabella/js-apps"
          className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="GitHub Repository"
        >
          <FaGithub className="text-xl" />
          <span>Star on GitHub</span>
        </a>

        <div className="flex justify-center">
          <ModeToggle />
        </div>
      </div>
    </aside>
  );
};

export default LeftSideBar;