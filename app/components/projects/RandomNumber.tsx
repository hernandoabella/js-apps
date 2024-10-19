"use client"

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
      <div className="dark:bg-[#303030] p-8 rounded-lg shadow-lg border">
        <p className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-4">
          {randomNumber}
        </p>
        <button
          onClick={generateRandomNumber}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition  dark:hover:bg-blue-500"
        >
          Random Number
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;
