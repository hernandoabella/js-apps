"use client";

import React, { useState } from "react";

const INITIAL = ["HTML", "CSS", "JavaScript", "React", "Next.js"];

const DragDropList = () => {
  const [items, setItems] = useState(INITIAL);
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  const handleDragStart = (i: number) => setDragIdx(i);
  const handleDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault();
    if (dragIdx === null || dragIdx === i) return;
    const copy = [...items];
    const [moved] = copy.splice(dragIdx, 1);
    copy.splice(i, 0, moved);
    setItems(copy);
    setDragIdx(i);
  };
  const handleDragEnd = () => setDragIdx(null);

  const reset = () => setItems(INITIAL);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[200px] space-y-2">
        {items.map((item, i) => (
          <div key={item} draggable onDragStart={() => handleDragStart(i)} onDragOver={(e) => handleDragOver(e, i)} onDragEnd={handleDragEnd}
            className={`px-3 py-2 rounded-lg text-xs font-bold text-center cursor-grab active:cursor-grabbing transition-all select-none ${i === dragIdx ? "opacity-50 scale-95" : "hover:scale-[1.02]"} ${i % 2 === 0 ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"}`}>
            ≡ {item}
          </div>
        ))}
        <button onClick={reset} className="w-full py-1.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">↻ Reset</button>
      </div>
    </div>
  );
};

export default DragDropList;
