"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { apps, App } from "@/app/appData";

const Stars: React.FC<{ level: number }> = ({ level }) => (
  <div className="flex space-x-1">
    {Array.from({ length: level }, (_, i) => (
      <FaStar key={i} className="text-yellow-500" />
    ))}
  </div>
);

const Apps: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-12">
      <h1 className="text-4xl font-bold mb-12">All Apps (Full Content)</h1>

      <div className="grid grid-cols-1 gap-12 w-full max-w-4xl">
        {apps.map((app) => (
          <div
            key={app.name}
            className="bg-yellow-100 border rounded-2xl shadow p-6 flex flex-col gap-4"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <img src={app.icon} alt={app.name} className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-bold text-[#8f6712] flex items-center gap-2">
                  {app.name} <Stars level={app.level} />
                </h2>
                <p className="text-gray-700">{app.description}</p>
              </div>
            </div>

            {/* The actual app component 👇 */}
            <div className="border-t pt-4">
              <app.Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
