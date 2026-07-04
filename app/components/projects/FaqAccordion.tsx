"use client";

import React, { useState } from "react";

const faqs = [
  { q: "What is HTML?", a: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications." },
  { q: "What is CSS?", a: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen." },
  { q: "What is JavaScript?", a: "JavaScript is a programming language that enables interactive web pages. It runs in the browser." },
  { q: "What is React?", a: "React is a JavaScript library for building user interfaces, maintained by Facebook." },
];

const FaqAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[260px] space-y-1">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs font-bold text-left text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span className="truncate">{faq.q}</span>
              <span className={`text-gray-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-24" : "max-h-0"}`}>
              <p className="px-3 py-2 text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
