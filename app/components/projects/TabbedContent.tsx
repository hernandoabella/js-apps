"use client";

import React, { useState } from "react";

const TABS = [
  { label: "HTML", content: "HTML structures web pages with elements like headings, paragraphs, and divs." },
  { label: "CSS", content: "CSS styles HTML elements with colors, layouts, fonts, and animations." },
  { label: "JS", content: "JavaScript adds interactivity, handles events, and manipulates the DOM." },
];

const TabbedContent = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[260px] space-y-2">
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {TABS.map((t, i) => (
            <button key={t.label} onClick={() => setTab(i)}
              className={`flex-1 py-2 text-xs font-bold transition-all ${i === tab ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 min-h-[60px]">
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{TABS[tab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabbedContent;
