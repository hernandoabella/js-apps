"use client";

import React, { useState } from "react";

const images = [
  { label: "🏔️ Mountain" },
  { label: "🌊 Beach" },
  { label: "🌲 Forest" },
  { label: "🌅 Sunset" },
  { label: "🌃 City" },
];

const ImageGallery = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-2 w-full max-w-[240px]">
        <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center text-5xl shadow-inner">
          {images[current].label.split(" ")[0]}
        </div>
        <p className="text-xs font-bold text-gray-600 dark:text-gray-300">{images[current].label}</p>
        <p className="text-[10px] text-gray-400">Image {current + 1} of {images.length}</p>
        <div className="flex justify-center gap-2">
          <button onClick={prev}
            className="px-3 py-1.5 text-xs font-bold bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">&larr; Prev</button>
          <button onClick={next}
            className="px-3 py-1.5 text-xs font-bold bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">Next &rarr;</button>
        </div>
        <div className="flex justify-center gap-1">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-indigo-500 w-4" : "bg-gray-300 dark:bg-gray-600"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
