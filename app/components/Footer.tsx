"use client";

import React, { useState } from "react";
import { FaGithub, FaRocket, FaBook, FaUser, FaHome, FaSearch, FaStar } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomFooter = () => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome className="text-lg" /> },
    { name: "Tutorials", href: "#", icon: <FaBook className="text-lg" /> },
    { name: "About", href: "#", icon: <FaUser className="text-lg" /> },
  ];

  return (
    <>
      {/* Spacer to prevent content from being hidden behind footer */}
      <div className="h-20" />
      
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-lg z-50 border-t">
        {/* Expanded view toggle */}
        <div className="flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1 -mt-3 bg-background border rounded-full text-sm hover:bg-accent transition-colors"
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
        
        {/* Main footer content */}
        <div className={`${isExpanded ? 'h-32' : 'h-16'} transition-all duration-300 overflow-hidden`}>
          <div className="container mx-auto px-4 h-full">
            {/* Expanded content */}
            {isExpanded && (
              <div className="flex flex-col items-center py-2 space-y-3">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                  <div className="text-xl font-bold font-[var(--font-squada-one)] tracking-widest">
                    <span className="text-yellow-400">&lt;/JS-APPS&gt;</span>
                  </div>
                </Link>
                
                {/* GitHub Link */}
                <a
                  href="https://www.github.com/hernandoabella/js-apps"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent hover:bg-yellow-400/10 transition-colors"
                  title="GitHub Repository"
                >
                  <FaGithub className="text-lg" />
                  <span>Star on GitHub</span>
                  <FaStar className="text-yellow-400" />
                </a>
              </div>
            )}
            
            {/* Navigation Links - Always visible */}
            <div className="flex items-center justify-between h-16">
              <div className="flex-1">
                <ModeToggle />
              </div>
              
              <nav className="flex items-center justify-center flex-1 space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex flex-col items-center p-3 rounded-lg transition-all ${pathname === link.href
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "hover:bg-accent"
                    }`}
                    title={link.name}
                  >
                    <span className={pathname === link.href ? "text-yellow-400" : "text-foreground/70"}>
                      {link.icon}
                    </span>
                    <span className="text-xs mt-1">{link.name}</span>
                  </Link>
                ))}
              </nav>
              
              <div className="flex-1 flex justify-end">
                {/* Optional: Add additional elements if needed */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BottomFooter;