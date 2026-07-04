"use client";

import React, { useState } from "react";

const defaultMd = `# Hello!

**Bold** and *italic*.

- List item 1
- List item 2

> Blockquote

\`inline code\``;

const MarkdownPreview = () => {
  const [md, setMd] = useState(defaultMd);

  const renderHtml = (text: string) => {
    let html = text
      .replace(/^### (.+)$/gm, "<h3 class='text-sm font-bold mt-2 mb-1'>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2 class='text-base font-bold mt-2 mb-1'>$1</h2>")
      .replace(/^# (.+)$/gm, "<h1 class='text-lg font-bold mt-2 mb-1'>$1</h1>")
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/^> (.+)$/gm, "<blockquote class='border-l-2 border-gray-400 pl-2 italic text-xs my-1 text-gray-500'>$1</blockquote>")
      .replace(/^- (.+)$/gm, "<li class='text-xs ml-3 list-disc'>$1</li>")
      .replace(/`([^`]+)`/g, "<code class='bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs'>$1</code>")
      .replace(/\n\n/g, "<br/>");
    return html;
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[280px] space-y-2">
        <textarea
          value={md}
          onChange={(e) => setMd(e.target.value)}
          className="w-full h-[80px] text-[10px] font-mono p-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <div className="border rounded-lg p-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 min-h-[60px] text-xs leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderHtml(md) }} />
      </div>
    </div>
  );
};

export default MarkdownPreview;
