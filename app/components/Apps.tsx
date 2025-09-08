"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { apps, App } from "@/app/appData";

const levelDescriptions: { [key: number]: string } = {
  1: "Rookie: Just starting.",
  2: "Novice: Gaining confidence.",
  3: "Pro: Building real-world apps.",
  4: "Master: Leading projects.",
  5: "Ninja: Tech innovator.",
};

const Stars: React.FC<{ level: number }> = ({ level }) => (
  <div className="flex space-x-1">
    {Array.from({ length: level }, (_, i) => (
      <FaStar key={i} className="text-yellow-500" />
    ))}
  </div>
);

const Apps: React.FC = () => {
  const appsByLevel = apps.reduce((acc: { [key: number]: App[] }, app: App) => {
    acc[app.level] = acc[app.level] || [];
    acc[app.level].push(app);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center my-8">JS-APPS</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl">
        Learn JavaScript by building real-life projects!
      </p>

      {Object.entries(appsByLevel).map(([levelStr, levelApps]) => {
        const level = parseInt(levelStr, 10);
        const [title, desc] = levelDescriptions[level].split(":");

        return (
          <section key={level} className="my-16 w-full max-w-6xl text-center">
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                {title} <Stars level={level} />
              </h2>
              <p className="text-gray-500 text-lg mt-2">{desc}</p>
            </div>

            {/* App Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {levelApps.map((app: App) => {
                const ProjectComponent = app.ProjectComponent;

                return (
                  <div
                    key={app.name}
                    className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
                  >
                    {/* App Header */}
                    <div className="flex items-center p-4 space-x-3 border-b border-gray-200 dark:border-gray-700">
                      <img src={app.icon} alt={app.name} className="w-8 h-8" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{app.name}</h3>
                    </div>

                    {/* Project Component */}
                    <div className="p-4 h-64 overflow-hidden">
                      {ProjectComponent ? (
                        <div className="h-full flex items-center justify-center">
                          <ProjectComponent />
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                          No preview available
                        </div>
                      )}
                    </div>

                    {/* App Footer */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{app.description}</p>
                      <div className="flex justify-between items-center">

                        <div className="flex items-center space-x-1">
                          <FaStar className="text-yellow-400" />
                          <span className="text-sm">{app.projectStars}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Apps;