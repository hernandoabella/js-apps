"use client";

import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("2010-01-01");
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculate = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    setAge({ years, months, days });
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-xs space-y-4">
        <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button onClick={calculate}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">Calculate Age</button>
        {age && (
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Years", value: age.years },
              { label: "Months", value: age.months },
              { label: "Days", value: age.days },
            ].map(item => (
              <div key={item.label} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-blue-500">{item.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
