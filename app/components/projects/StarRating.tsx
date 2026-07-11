"use client";

import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center justify-center h-full min-h-[200px] p-3">
      <div className="text-center space-y-4">
        <div className="flex justify-center gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)}
              className={`text-3xl transition-all duration-150 ${star <= (hover || rating) ? "scale-110" : "scale-100"}`}>
              <span className={star <= (hover || rating) ? "text-yellow-400 drop-shadow" : "text-gray-300 dark:text-gray-600"}>{star <= (hover || rating) ? "★" : "☆"}</span>
            </button>
          ))}
        </div>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400">{rating ? `${rating} / 5` : "Click to rate"}</p>
      </div>
    </div>
  );
};

export default StarRating;
