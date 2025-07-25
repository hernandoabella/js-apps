"use client";

import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { apps, App } from "@/app/appData";

const levelIcons: { [key: number]: string } = {
  1: "/icons/rookie.svg",
  2: "/icons/novice.svg",
  3: "/icons/pro.svg",
  4: "/icons/master.svg",
  5: "/icons/ninja.svg",
};

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
  const appsByLevel = apps.reduce((acc: { [key: number]: App[] }, app) => {
    acc[app.level] = acc[app.level] || [];
    acc[app.level].push(app);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center px-4 md:px-12">
      {Object.entries(appsByLevel).map(([levelStr, apps]) => {
        const level = parseInt(levelStr, 10);
        const [title, desc] = levelDescriptions[level].split(":");

        return (
          <section key={level} className="my-16 w-full max-w-4xl text-center">
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={levelIcons[level]}
                alt={title}
                className="w-20 h-20 mb-4"
              />
              <h2 className="text-3xl font-bold flex items-center gap-3">
                {title} <Stars level={level} />
              </h2>
              <p className="text-gray-500 text-lg mt-2">{desc}</p>
            </div>

            {/* App Buttons (Duolingo Style) */}
            <div className="flex flex-col gap-6 items-center">
              {apps.map((app, index) => {
                const zigzag = index % 2 === 0 ? "translate-x-6" : "-translate-x-6";

                return (
                  <Link key={app.name} href={app.path} passHref>
                    <div
                      className={`
                        group relative bg-yellow-400 border-b-4 border-yellow-600 rounded-xl 
                        px-6 py-4 flex flex-col items-center justify-center cursor-pointer 
                        transition-transform duration-300 ease-out
                        hover:-translate-y-1 hover:border-b-6 
                        active:translate-y-1 active:border-b-2
                        transform ${zigzag}
                      `}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-10 h-10 mb-2"
                      />
                      <span className="text-[#8f6712] font-semibold text-lg z-10 relative">
                        {app.name}
                      </span>
                      <span className="absolute inset-0 overflow-hidden rounded-xl">
                        <span className="absolute left-0 top-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-yellow-300 opacity-20 transition-transform duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                      </span>
                    </div>
                  </Link>
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