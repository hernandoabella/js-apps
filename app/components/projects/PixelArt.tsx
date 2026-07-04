"use client";

import React, { useState } from "react";

const COLORS = ["#1a1a2e", "#e94560", "#0f3460", "#16213e", "#f5f5f5", "#ffcc00", "#4ecca3", "#ff6b6b"];
const GRID = 8;

const PixelArt = () => {
  const [grid, setGrid] = useState<string[][]>(
    Array.from({ length: GRID }, () => Array(GRID).fill("#1a1a2e"))
  );
  const [color, setColor] = useState("#e94560");
  const [drawing, setDrawing] = useState(false);

  const paint = (r: number, c: number) => {
    const copy = grid.map((row) => [...row]);
    copy[r][c] = copy[r][c] === color ? COLORS[0] : color;
    setGrid(copy);
  };

  const clear = () => setGrid(Array.from({ length: GRID }, () => Array(GRID).fill("#1a1a2e")));

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3"
      onMouseLeave={() => setDrawing(false)}>
      <div className="space-y-3">
        <div className="inline-grid grid-cols-8 gap-[1px] bg-gray-300 dark:bg-gray-600 p-[1px] rounded"
          onMouseDown={() => setDrawing(true)} onMouseUp={() => setDrawing(false)}>
          {grid.map((row, r) =>
            row.map((cell, c) => (
              <div key={`${r}-${c}`}
                className="w-5 h-5 cursor-pointer"
                style={{ backgroundColor: cell }}
                onMouseEnter={() => { if (drawing) paint(r, c); }}
                onClick={() => paint(r, c)}
              />
            ))
          )}
        </div>
        <div className="flex justify-center gap-1.5 flex-wrap">
          {COLORS.map((clr) => (
            <button key={clr}
              className={`w-5 h-5 rounded-full border-2 transition-all ${color === clr ? "border-white scale-110 shadow" : "border-transparent"}`}
              style={{ backgroundColor: clr }}
              onClick={() => setColor(clr)}
            />
          ))}
        </div>
        <button onClick={clear}
          className="block mx-auto px-3 py-1 text-xs font-bold bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">Clear</button>
      </div>
    </div>
  );
};

export default PixelArt;
