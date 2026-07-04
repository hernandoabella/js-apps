"use client";

import React, { useRef, useState, useEffect } from "react";

const COLORS = ["#1f2937", "#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7", "#ec4899", "#f97316"];

const DrawingPad = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("#1f2937");
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = "round";
    ctx.lineWidth = 3;
  }, []);

  const start = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    setDrawing(true);
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stop = () => setDrawing(false);

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="space-y-2">
        <canvas ref={canvasRef} width={200} height={120}
          className="rounded-lg border border-gray-300 dark:border-gray-600 cursor-crosshair bg-white"
          onMouseDown={start} onMouseMove={draw} onMouseUp={stop} onMouseLeave={stop} />
        <div className="flex justify-center gap-1.5 flex-wrap">
          {COLORS.map((c) => (
            <button key={c}
              className={`w-4 h-4 rounded-full border transition-all ${color === c ? "border-gray-800 scale-125" : "border-transparent"}`}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)} />
          ))}
          <button onClick={clear}
            className="ml-1 px-2 py-0.5 text-[10px] font-bold bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default DrawingPad;
