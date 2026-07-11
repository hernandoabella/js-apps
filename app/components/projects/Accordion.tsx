"use client";

import React, { useState } from "react";

const items = [
  { title: "What is HTML?", desc: "HTML structures content on the web using elements like headings, paragraphs, and links." },
  { title: "What is CSS?", desc: "CSS styles HTML elements with colors, layouts, fonts, and responsive designs." },
  { title: "What is JavaScript?", desc: "JavaScript adds interactivity, animations, and dynamic behavior to web pages." },
  { title: "What is a Framework?", desc: "A framework provides a structured foundation to build applications faster and more reliably." },
];

const Accordion = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[260px] space-y-1">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs font-bold text-left text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span className="truncate">{item.title}</span>
              <span className={`text-gray-400 transition-all duration-200 ${open === i ? "rotate-180" : ""}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-24" : "max-h-0"}`}>
              <p className="px-3 py-2 text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
