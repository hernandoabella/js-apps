"use client";

import React, { useState } from "react";

const GradientGenerator = () => {
  // State to store the random gradient CSS value
  const [gradient, setGradient] = useState<string>(
    "linear-gradient(to right, cyan, blue)"
  );

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
    <div className="h-96 rounded-lg flex items-center justify-center transition-all duration-700 ease-in-out">
      <div className="flex justify-center items-center">
        <div className="dark:bg-[#303030] p-8 rounded-lg border-2">
          <div
            className="text-xl font-semibold text-center text-white mb-4 p-10 rounded"
            style={{ background: gradient }}
          >
            
          </div>
          <button
            onClick={generateRandomGradient}
            className="mt-4 px-4 py-2 bg-[#6B7280] hover:bg-[#4b515c] text-white rounded-md"
          >
            Generate Gradient
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;
