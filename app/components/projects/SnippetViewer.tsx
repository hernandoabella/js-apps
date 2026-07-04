"use client";

import React, { useState } from "react";

const snippets = [
  { lang: "HTML", icon: "🔴", code: `<div class=\"greeting\">\n  <h1>Hello World!</h1>\n  <p>Welcome to coding</p>\n</div>` },
  { lang: "CSS", icon: "🔵", code: `.greeting {\n  text-align: center;\n  padding: 2rem;\n}\nh1 {\n  color: #3b82f6;\n  font-size: 2rem;\n}` },
  { lang: "JS", icon: "🟡", code: `const greet = (name) => {\n  return \`Hello, \${name}!\`;\n};\nconsole.log(greet(\"World\"));` },
];

const SnippetViewer = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[260px] space-y-2">
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {snippets.map((s, i) => (
            <button key={i} onClick={() => setTab(i)}
              className={`flex-1 py-1.5 text-xs font-bold transition-all ${i === tab ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
              {s.icon} {s.lang}
            </button>
          ))}
        </div>
        <pre className="text-[10px] font-mono bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto min-h-[80px] leading-relaxed border border-gray-700">{snippets[tab].code}</pre>
      </div>
    </div>
  );
};

export default SnippetViewer;
