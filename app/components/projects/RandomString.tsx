"use client";

import React, { useState } from "react";

// Function to generate a random string
const generateRandomString = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const RandomString = () => {
  // State to store the random string
  const [randomString, setRandomString] = useState("A1b2C3");

  // Function to generate a random string when button is clicked
  const generateString = () => {
    const newRandomString = generateRandomString(6); // Generates a random string of length 6
    setRandomString(newRandomString);
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-8 rounded-lg border-2">
        <p className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-4">
          {randomString}
        </p>
        <button
          onClick={generateString}
          className="mt-4 px-4 py-2 bg-[#6B7280] hover:bg-[#4b515c] text-white rounded-md"
        >
          Random String
        </button>
      </div>
    </div>
  );
};

export default RandomString;
