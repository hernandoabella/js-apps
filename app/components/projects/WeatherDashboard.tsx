"use client";

import React, { useState } from "react";

const mockWeather: Record<string, { temp: number; condition: string; humidity: number; wind: number; icon: string }> = {
  london: { temp: 14, condition: "Cloudy", humidity: 72, wind: 12, icon: "☁️" },
  paris: { temp: 18, condition: "Sunny", humidity: 55, wind: 8, icon: "☀️" },
  tokyo: { temp: 22, condition: "Partly Cloudy", humidity: 65, wind: 10, icon: "⛅" },
  "new york": { temp: 20, condition: "Clear", humidity: 60, wind: 15, icon: "☀️" },
  sydney: { temp: 16, condition: "Rainy", humidity: 80, wind: 20, icon: "🌧️" },
  moscow: { temp: 8, condition: "Overcast", humidity: 78, wind: 14, icon: "☁️" },
  dubai: { temp: 35, condition: "Hot & Sunny", humidity: 25, wind: 5, icon: "☀️" },
  default: { temp: 21, condition: "Clear", humidity: 50, wind: 10, icon: "☀️" },
};

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<typeof mockWeather.london | null>(null);
  const [searched, setSearched] = useState(false);

  const search = () => {
    const key = city.trim().toLowerCase();
    if (!key) return;
    setWeather(mockWeather[key] || { ...mockWeather.default, condition: `"${city}" not found, showing default` });
    setSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") search();
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[260px] p-3">
      <div className="w-full max-w-xs space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter city..."
            className="flex-1 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={search}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-sm transition-all">Go</button>
        </div>
        {searched && weather && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl mb-1">{weather.icon}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{weather.temp}°C</div>
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{weather.condition}</div>
            <div className="flex justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span>💧 {weather.humidity}%</span>
              <span>💨 {weather.wind} km/h</span>
            </div>
          </div>
        )}
        {!searched && (
          <p className="text-center text-xs text-gray-400 dark:text-gray-500">Try: London, Paris, Tokyo, Dubai...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
