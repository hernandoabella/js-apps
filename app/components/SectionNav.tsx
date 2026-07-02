"use client";

import React from "react";
import { FaRocket, FaCogs, FaLayerGroup, FaCode, FaGamepad, FaStar } from "react-icons/fa";

const sections = [
  { id: "how-it-works", label: "How It Works", icon: <FaRocket className="w-3.5 h-3.5" /> },
  { id: "features", label: "Features", icon: <FaStar className="w-3.5 h-3.5" /> },
  { id: "roadmap", label: "Roadmap", icon: <FaLayerGroup className="w-3.5 h-3.5" /> },
  { id: "projects", label: "Projects", icon: <FaCode className="w-3.5 h-3.5" /> },
  { id: "tech-stack", label: "Tech Stack", icon: <FaCogs className="w-3.5 h-3.5" /> },
  { id: "gamification", label: "Gamification", icon: <FaGamepad className="w-3.5 h-3.5" /> },
  { id: "faq", label: "FAQ", icon: <FaStar className="w-3.5 h-3.5" /> },
];

const SectionNav = () => {
  const [active, setActive] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
      const els = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      for (const el of els) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) {
          setActive(el.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!visible) return null;

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1">
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
            active === s.id
              ? "bg-blue-500 text-white shadow-md"
              : "bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-700"
          }`}
          title={s.label}
        >
          {s.icon}
          <span className="sr-only xl:not-sr-only">{s.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default SectionNav;
