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
  1: "Rookie: Just starting out, learning the basics of coding and JavaScript.",
  2: "Novice: Gaining confidence, enhancing skills, and tackling simple projects.",
  3: "Pro: Solid understanding of coding concepts, building real-world applications.",
  4: "Master: Skilled developers mastering complex challenges and leading projects.",
  5: "Ninja: Advanced programmers, innovating and pushing boundaries in tech.",
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
    <div className="p-10 mt-20 flex flex-col items-center"> {/* Centrado del contenedor */}
      {Object.keys(appsByLevel).map((level) => (
        <div key={level} className="mb-10 text-center"> {/* Centrado del texto */}
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center"> {/* Centrado del encabezado */}
            <span className="mr-2">
              {levelDescriptions[parseInt(level, 10)].split(":")[0]}:
            </span>
            <Stars level={parseInt(level, 10)} />
          </h2>
          <p className="text-lg mb-4">
            {levelDescriptions[parseInt(level, 10)].split(":")[1]}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center"> {/* Centrado de los círculos */}
            {appsByLevel[parseInt(level, 10)].map((app, index) => (
              <div key={app.name} className="relative">
                <Link href={app.path}>
                  <div
                    className="block absolute inset-0"
                    style={{ zIndex: 10 }}
                  />
                </Link>
                <div
                  className={`flex font-semibold justify-center items-center w-24 h-24 rounded-full shadow-lg dark:bg-[#404040] duration-300 
                  ${index % 2 === 0 ? 'transform translate-x-10' : 'transform -translate-x-10'}`} // Desplazamiento alternativo
                >
                  <div className="text-center h-10 flex justify-center items-center">
                    {app.name}
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
