"use client";

import React, { useState, useEffect } from "react";

const NoteKeeper = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("jsapps-notes");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("jsapps-notes", JSON.stringify(notes));
  }, [notes]);

  const add = () => {
    if (!input.trim()) return;
    setNotes([input.trim(), ...notes]);
    setInput("");
  };

  const remove = (i: number) => setNotes(notes.filter((_, idx) => idx !== i));

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="w-full max-w-[240px] space-y-2">
        <div className="flex gap-1">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()}
            className="flex-1 px-2 py-1.5 text-xs border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Write a note..." />
          <button onClick={add}
            className="px-3 py-1.5 text-xs font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">Add</button>
        </div>
        <div className="space-y-1 max-h-[140px] overflow-y-auto">
          {notes.map((note, i) => (
            <div key={i} className="flex items-center justify-between gap-2 px-2 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs">
              <span className="truncate text-gray-700 dark:text-gray-200">{note}</span>
              <button onClick={() => remove(i)} className="text-red-400 hover:text-red-600 font-bold shrink-0">&times;</button>
            </div>
          ))}
          {notes.length === 0 && <p className="text-xs text-gray-400 text-center py-4">No notes yet</p>}
        </div>
      </div>
    </div>
  );
};

export default NoteKeeper;
