import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { apps, App } from "@/app/appData";
import Image from "next/image";

const levelIcons: { [key: number]: string } = {
  1: "/icons/rookie.svg",
  2: "/icons/novice.svg",
  3: "/icons/pro.svg",
  4: "/icons/master.svg",
  5: "/icons/ninja.svg",
};

const Stars: React.FC<{ level: number }> = ({ level }) => {
  const stars = Array.from({ length: level }, (_, i) => (
    <FaStar key={i} className="text-yellow-500" />
  ));
  return <span className="flex space-x-1">{stars}</span>;
};

const levelDescriptions: { [key: number]: string } = {
  1: "Rookie: Learning the basics.",
  2: "Novice: Tackling simple projects.",
  3: "Pro: Building real-world apps.",
  4: "Master: Leading complex projects.",
  5: "Ninja: Innovating in tech.",
};

// Tooltip component positioned outside the button on hover
const Tooltip: React.FC<{ text: string; index: number }> = ({
  text,
  index,
}) => (
  <span
    className={`absolute w-20 opacity-0 hover:opacity-100 p-2 text-xs bg-[#323330] text-white rounded shadow-lg group-hover:opacity-100 transition-opacity duration-200 ${
      index % 2 === 0 ? "left-full ml-4" : "right-full mr-4"
    }`}
  >
    {text}
  </span>
);

const Apps: React.FC = () => {
  const appsByLevel: { [key: number]: App[] } = apps.reduce((acc, app) => {
    if (!acc[app.level]) {
      acc[app.level] = [];
    }
    acc[app.level].push(app);
    return acc;
  }, {} as { [key: number]: App[] });

  return (
    <div className="p-10 mt-20 flex flex-col items-center">
      {Object.keys(appsByLevel).map((level) => (
        <div key={level} className="mb-10 text-center">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
            <img
              src={levelIcons[parseInt(level, 10)]}
              alt={levelDescriptions[parseInt(level, 10)].split(":")[0]}
              className="w-8 h-8 mr-2"
            />
            <span className="mr-2">
              {levelDescriptions[parseInt(level, 10)].split(":")[0]}:
            </span>
            <Stars level={parseInt(level, 10)} />
          </h2>
          <p className="text-lg mb-4">
            {levelDescriptions[parseInt(level, 10)].split(":")[1]}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            {appsByLevel[parseInt(level, 10)].map((app, index) => (
              <div
                key={app.name}
                className={`p-5 hover:rounded-full relative group hover:scale-110 transition-all border-4 bg-[#323330] border-[#f0db4f] shadow-xl ${
                  index % 2 === 0 ? "translate-x-8" : "-translate-x-8"
                }`}
              >
                <Tooltip text={`${app.name}`} index={index} />
                <Link href={app.path}>
                  <div className="block absolute inset-0" />
                </Link>
                <div>
                  <div className="text-center h-10 flex justify-center items-center">
                    <Image
                      src={app.icon}
                      alt={app.icon}
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apps;
