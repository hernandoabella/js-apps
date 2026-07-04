"use client";

import React, { useState } from "react";

const JsonFormatter = () => {
  const [input, setInput] = useState('{"name":"John","age":30,"city":"New York"}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const format = () => {
    setError("");
    setOutput("");
    if (!input.trim()) { setError("Please enter JSON"); return; }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
    }
  };

  const minify = () => {
    setError("");
    setOutput("");
    if (!input.trim()) { setError("Please enter JSON"); return; }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
    }
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[280px] p-3">
      <div className="w-full max-w-xs space-y-2">
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter JSON..."
          className="w-full h-20 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <div className="flex gap-2">
          <button onClick={format} className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-bold text-xs shadow-md">Format</button>
          <button onClick={minify} className="flex-1 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-lg font-bold text-xs shadow-md">Minify</button>
        </div>
        {error && <div className="text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">{error}</div>}
        {output && (
          <div className="relative">
            <pre className="w-full max-h-24 overflow-auto px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-mono leading-relaxed border border-gray-200 dark:border-gray-700">{output}</pre>
            <button onClick={copy} className="absolute top-1 right-1 px-2 py-1 bg-blue-500 text-white rounded text-xs font-semibold hover:bg-blue-600">{copied ? "Copied!" : "Copy"}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JsonFormatter;
