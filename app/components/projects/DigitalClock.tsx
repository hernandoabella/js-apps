"use client";

import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => String(n).padStart(2, "0");
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2 text-center">
        <div className="text-5xl font-mono font-bold text-gray-800 dark:text-gray-200 mb-2 tracking-wider">
          {fmt(h12)}:{fmt(m)}:{fmt(s)}
          <span className="text-2xl ml-2 text-blue-500">{ampm}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {time.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>
    </div>
  );
};

export default DigitalClock;
