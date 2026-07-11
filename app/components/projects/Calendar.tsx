"use client";

import React, { useState } from "react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Calendar = () => {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selected, setSelected] = useState(now.getDate());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prev = () => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); };
  const next = () => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[220px]">
        <div className="flex justify-between items-center mb-2">
          <button onClick={prev} className="text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 w-6 h-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">◀</button>
          <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{MONTHS[month]} {year}</span>
          <button onClick={next} className="text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 w-6 h-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">▶</button>
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {DAYS.map(d => <div key={d} className="text-[10px] font-bold text-gray-400 py-1">{d}</div>)}
          {Array.from({ length: firstDay }, (_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => (
            <button key={i + 1} onClick={() => setSelected(i + 1)}
              className={`text-xs w-7 h-7 rounded-full font-bold transition-all ${i + 1 === selected ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 shadow" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
