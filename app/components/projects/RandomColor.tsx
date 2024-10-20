"use client";

import React, { useState } from "react";

// Function to generate a random color in hex format
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to determine if a color is light or dark for contrast
const isLightColor = (color: string) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  // Use the luminance formula to determine brightness
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186; // If luminance > 186, it's a light color
};

const RandomColor = () => {
  // State to store the random color
  const [randomColor, setRandomColor] = useState("#FF5733");

  // Function to generate a random color when the button is clicked
  const generateColor = () => {
    const newRandomColor = generateRandomColor();
    setRandomColor(newRandomColor);
  };

  // Determine text color based on the background color
  const textColor = isLightColor(randomColor) ? "text-black" : "text-white";

  return (
    <div className="flex items-center justify-center h-96">
      <div
        className="dark:bg-[#303030] p-8 rounded-lg border-2"
        style={{ backgroundColor: randomColor }}
      >
        <p className={`text-3xl font-semibold text-center mb-4 ${textColor}`}>
          {randomColor}
        </p>
        <button
          onClick={generateColor}
          className="mt-4 px-4 py-2 bg-[#6B7280] text-white rounded-md"
        >
          Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
