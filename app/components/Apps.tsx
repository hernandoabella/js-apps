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

const Stars: React.FC<{ level: number }> = ({ level }) => {
  const stars = Array.from({ length: level }, (_, i) => (
    <FaStar key={i}  />
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
                className={`${index === 0 ? "translate-x-0" : index % 2 === 0 ? "translate-x-10" : "-translate-x-10"
                }`}
              >
                <Link href={app.path}>
                  <div className="block absolute inset-0" />
                  <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-xl bg-neutral-950 px-8 py-2 text-neutral-50 hover:text-black"><span className="relative z-10">{app.name}</span><span className="absolute inset-0 overflow-hidden rounded-lg"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-yellow-400 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apps;
