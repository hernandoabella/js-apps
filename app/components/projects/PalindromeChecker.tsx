"use client";

import React, { useState } from "react";

const PalindromeChecker = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const checkPalindrome = () => {
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed && cleaned.length > 0) {
      setResult("✅ Yes, it's a palindrome!");
    } else if (cleaned.length === 0) {
      setResult("Please enter some text.");
    } else {
      setResult("❌ No, it's not a palindrome.");
    }
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text..."
          className="w-full mb-4 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-[#252525] dark:text-gray-200"
        />
        <button onClick={checkPalindrome} className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">
          Check Palindrome
        </button>
        {result && (
          <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default PalindromeChecker;
