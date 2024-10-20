"use client";

import React, { useState } from "react";

const RandomNumber = () => {
  // State to store the random number
  const [randomNumber, setRandomNumber] = useState(7);

  // Function to generate a random number
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg  border-2">
        <p className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-4">
          {randomNumber}
        </p>
        <button
          onClick={generateRandomNumber}
          className="mt-4 px-4 py-2 bg-[#6B7280] hover:bg-[#4b515c] text-white rounded-md"
        >
          Random Number
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;
