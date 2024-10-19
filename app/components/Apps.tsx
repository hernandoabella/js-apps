import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { apps, App } from "@/app/appData";

const Stars: React.FC<{ level: number }> = ({ level }) => {
  const stars = Array.from({ length: level }, (_, i) => (
    <FaStar key={i} className="text-yellow-500" />
  ));
  return <span className="flex space-x-1">{stars}</span>;
};

const levelDescriptions: { [key: number]: string } = {
  1: "Entry Level: For beginners, covers JavaScript basics.",
  2: "Junior: Enhance skills with some prior programming experience.",
  3: "Mid: Intermediate stage, refining skills and learning new concepts.",
  4: "Senior: Experienced developers seeking a challenge.",
  5: "Expert: For advanced programmers looking for a greater challenge.",
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
    <div className="p-10 mt-20">
      {Object.keys(appsByLevel).map((level) => (
        <div key={level} className="mb-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <span className="mr-2">
              {levelDescriptions[parseInt(level, 10)].split(":")[0]}:
            </span>
            <Stars level={parseInt(level, 10)} />
          </h2>
          <p className="text-lg mb-4">
            {levelDescriptions[parseInt(level, 10)].split(":")[1]}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {appsByLevel[parseInt(level, 10)].map((app) => (
              <div key={app.name} className="relative">
                <Link href={app.path}>
                  <div
                    className="block w-full h-full absolute inset-0"
                    style={{ zIndex: 10 }}
                  />
                </Link>
                <div className=" rounded-xl bg-white/20 shadow-lg ">
                  {app.ProjectComponent && (
                    <div className="w-full  ">
                      <app.ProjectComponent />
                    </div>
                    
                  )}
                  
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
