"use client";

import React, { useEffect, useRef } from "react";

const AnalogClock = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const now = new Date();
      const h = now.getHours() % 12;
      const m = now.getMinutes();
      const s = now.getSeconds();

      ctx.clearRect(0, 0, 160, 160);
      ctx.save();
      ctx.translate(80, 80);

      // face
      ctx.beginPath();
      ctx.arc(0, 0, 68, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.strokeStyle = "#d1d5db";
      ctx.lineWidth = 2;
      ctx.stroke();

      // hour markers
      for (let i = 0; i < 12; i++) {
        const ang = (i * Math.PI * 2) / 12 - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * 54, Math.sin(ang) * 54);
        ctx.lineTo(Math.cos(ang) * 60, Math.sin(ang) * 60);
        ctx.strokeStyle = "#374151";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // hour hand
      const hAng = (h * Math.PI * 2) / 12 + (m * Math.PI * 2) / 720 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(hAng) * 34, Math.sin(hAng) * 34);
      ctx.strokeStyle = "#1f2937";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.stroke();

      // minute hand
      const mAng = (m * Math.PI * 2) / 60 + (s * Math.PI * 2) / 3600 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(mAng) * 48, Math.sin(mAng) * 48);
      ctx.strokeStyle = "#374151";
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.stroke();

      // second hand
      const sAng = (s * Math.PI * 2) / 60 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(sAng) * 52, Math.sin(sAng) * 52);
      ctx.strokeStyle = "#ef4444";
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.stroke();

      // center dot
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#1f2937";
      ctx.fill();

      ctx.restore();
    };

    draw();
    const id = setInterval(draw, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <canvas ref={canvasRef} width={160} height={160} className="rounded-2xl shadow-inner" />
    </div>
  );
};

export default AnalogClock;
