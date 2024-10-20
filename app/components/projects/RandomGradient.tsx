"use client";

import React, { useState } from "react";

const RandomGradient = () => {
  // State to store the random gradient CSS value
  const [gradient, setGradient] = useState<string>("linear-gradient(to right, cyan, blue)");

  // Function to generate a random hex color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to generate a random gradient
  const generateRandomGradient = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360); // Random angle between 0 and 360
    const randomGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    setGradient(randomGradient);
  };

  return (
    <div className="h-96 rounded-lg flex items-center justify-center transition-all duration-700 ease-in-out" style={{ background: gradient }}>
      <div className="p-8 bg-white/30 dark:bg-black/30 rounded-lg backdrop-blur-md shadow-lg">
        <p className="text-xl font-semibold text-center text-white mb-4">
          {gradient}
        </p>
        <button
          onClick={generateRandomGradient}
          className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200 transition dark:text-gray-100 dark:bg-black dark:hover:bg-gray-800"
        >
          Generate Gradient
        </button>
      </div>
    </div>
  );
};

export default RandomGradient;
