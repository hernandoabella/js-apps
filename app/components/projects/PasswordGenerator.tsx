"use client";

import React, { useState, useCallback } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let chars = "";
    if (uppercase) chars += upper;
    if (lowercase) chars += lower;
    if (numbers) chars += num;
    if (symbols) chars += sym;
    if (!chars) return;
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
    setCopied(false);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleStyle = (on: boolean) =>
    on
      ? "bg-blue-500 text-white border-blue-500"
      : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-300 dark:border-gray-600";

  return (
    <div className="flex items-center justify-center h-full min-h-[260px] p-3">
      <div className="w-full max-w-xs space-y-3">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700">
          <span className="flex-1 font-mono text-sm font-bold text-gray-800 dark:text-gray-200 truncate select-all">
            {password || "Click Generate"}
          </span>
          {password && (
            <button onClick={copyToClipboard} className="text-blue-500 hover:text-blue-600 transition-colors text-sm font-semibold whitespace-nowrap">
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 w-14">Length: {length}</span>
          <input type="range" min={4} max={32} value={length} onChange={e => setLength(parseInt(e.target.value))}
            className="flex-1 h-1.5 accent-blue-500" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { key: "upper", label: "A-Z", state: uppercase, set: () => setUppercase(!uppercase) },
            { key: "lower", label: "a-z", state: lowercase, set: () => setLowercase(!lowercase) },
            { key: "num", label: "0-9", state: numbers, set: () => setNumbers(!numbers) },
            { key: "sym", label: "!@#", state: symbols, set: () => setSymbols(!symbols) },
          ].map(opt => (
            <button key={opt.key} onClick={opt.set}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition-all ${toggleStyle(opt.state)}`}>
              {opt.label}
            </button>
          ))}
        </div>
        <button onClick={generate}
          className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
