"use client";

import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // Store the current theme in localStorage on change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`h-full flex items-center justify-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`p-10 rounded-lg shadow-lg  ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-2xl mb-8 text-center">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </h1>

        <div className="flex justify-center">
          <label className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900">
            <input
              onClick={toggleTheme}
              className="peer sr-only"
              id="AcceptConditions"
              type="checkbox"
            />
            <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
