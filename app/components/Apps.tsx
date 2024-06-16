import React from "react";
import Link from "next/link";

const apps = [
  {
    id: 1,
    name: "App 1",
    path: "/apps/key-counter",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 1,
  },
  {
    id: 2,
    name: "App 2",
    path: "/apps/app2",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 2,
  },
  {
    id: 3,
    name: "App 3",
    path: "/apps/app3",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 3,
  },
  {
    id: 4,
    name: "App 4",
    path: "/apps/app4",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 4,
  },
  {
    id: 5,
    name: "App 5",
    path: "/apps/app5",
    iframeSrc: "https://lucent-semifreddo-6bce96.netlify.app/",
    level: 5,
  },
];

// Componente para mostrar estrellas según el nivel
const Stars = ({ level }) => {
  const stars = Array(level).fill("★");
  return <span className="text-yellow-500">{stars.join(" ")}</span>;
};

const Apps = () => {
  // Agrupar aplicaciones por nivel
  const appsByLevel = apps.reduce((acc, app) => {
    if (!acc[app.level]) {
      acc[app.level] = [];
    }
    acc[app.level].push(app);
    return acc;
  }, {});

  return (
    <div className="p-10">
      {/* Renderizar las aplicaciones por nivel */}
      {Object.keys(appsByLevel).map((level) => (
        <div key={level} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            Nivel {level} <Stars level={parseInt(level, 10)} />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {appsByLevel[level].map((app) => (
              <div key={app.id} className="relative">
                <Link href={app.path}>
                  <div
                    className="block w-full h-full absolute inset-0"
                    style={{ zIndex: 10 }} // Asegura que el enlace ocupe todo el contenedor
                  />
                </Link>
                <div className="isolate rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 h-full hover:shadow-lg transition-transform transform hover:-translate-y-1 flex justify-center items-center">
                  <iframe
                    title={app.name}
                    src={app.iframeSrc}
                    className="w-full h-72 border-none"
                  ></iframe>
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
