import React from "react";
import Image from "next/image";
import Link from "next/link";
import { apps } from "@/app/appData";
import { FaStar, FaArrowRight } from "react-icons/fa";

const levelColors: Record<number, string> = {
  1: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  2: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  3: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  4: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
  5: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
};

const Featured = () => {
  const featured = apps.slice(0, 6);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kickstart your journey with these hand-picked beginner-friendly projects. Each one includes guided steps, code validation, and instant feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((app) => (
            <Link
              key={app.name}
              href="/projects"
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image src={app.icon} alt={app.name} width={28} height={28} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${levelColors[app.level] || ""}`}>
                  Level {app.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {app.name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {app.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <FaStar className="w-3.5 h-3.5 text-yellow-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">{app.projectStars} stars</span>
                </div>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Start project <FaArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            View All Projects <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
