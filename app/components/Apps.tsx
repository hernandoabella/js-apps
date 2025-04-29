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
    <FaStar className="text-yellow-500" key={i} />
  ));
  return <span className="flex space-x-1">{stars}</span>;
};

const levelDescriptions: { [key: number]: string } = {
  1: "Rookie: Just starting.",
  2: "Novice: Gaining confidence.",
  3: "Pro: Building real-world apps.",
  4: "Master: Leading projects.",
  5: "Ninja: Tech innovator.",
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
        <div className="my-10">
          
          <div key={level} className="text-center rounded-xl">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
            <img
              src={levelIcons[parseInt(level, 10)]}
              alt={levelDescriptions[parseInt(level, 10)].split(":")[0]}
              className="w-20 h-20 m-auto"
            />
            <div>
              <span className="mr-2">
                {levelDescriptions[parseInt(level, 10)].split(":")[0]}:
              </span>
              <Stars level={parseInt(level, 10)} />
            </div>
          </h2>
          <p className="text-lg mb-4 text-gray-500">
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

                  <button className="cursor-pointer transition-all bg-yellow-400 text-[#8f6712] px-6 py-2 rounded-lg
border-yellow-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">{/* Project button with the icon */}
                    <span className="text-center">
                      {/* Add the SVG icon here */}
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-10 h-10 mx-auto my-2"
                      />

                    </span>
                    <span className="absolute inset-0 overflow-hidden rounded-lg">
                      <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-yellow-400 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span><span className="relative z-10">{app.name}</span><span className="absolute inset-0 overflow-hidden rounded-lg"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-yellow-400 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                </Link>

              </div>
            ))}
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Apps;
