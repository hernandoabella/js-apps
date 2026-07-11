"use client";

import React, { useState } from "react";

const fruits = [
  "Manzana", "Banana", "Cereza", "Durazno", "Fresa",
  "Granada", "Kiwi", "Lima", "Mango", "Naranja",
  "Papaya", "Pera", "Piña", "Plátano", "Sandía",
  "Toronja", "Uva", "Zapote",
];

const FilterList = () => {
  const [query, setQuery] = useState("");

  const filtered = fruits.filter(f =>
    f.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex items-start justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[220px] space-y-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar fruta..."
          className="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#252525] text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DE9804]"
        />
        <p className="text-[10px] text-gray-400">{filtered.length} resultados</p>
        <ul className="space-y-1 max-h-[140px] overflow-y-auto">
          {filtered.map((f, i) => (
            <li key={i} className="px-3 py-1.5 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-[#303030] rounded-md border border-gray-100 dark:border-gray-700">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
