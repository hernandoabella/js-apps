import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="p-8 md:p-20 dark:bg-slate-900 dark:text-white">
      <div className="text-center lg:text-left">
        <h2 className="text-base text-center text-sky-600 dark:text-sky-400 font-semibold tracking-wide uppercase mb-5">
          About us
        </h2>
        <h3 className="text-4xl font-bold mb-5 text-center text-slate-900 dark:text-white">
          Challenge your skills as a JavaScript developer
        </h3>
        <p className="mt-5 text-base text-slate-600 dark:text-slate-400 text-center">
          We provide JavaScript projects so you can challenge yourself and
          become a better developer.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 md:flex-row">
        <div className="flex flex-col items-center w-full p-4">
          <Image
            src="/learn-by-doing.png"
            alt="learn-by-doing"
            width={150}
            height={150}
            className="mb-5"
          />
          <h4 className="text-2xl font-bold m-3 text-center">Learn by Doing</h4>
          <p className="text-slate-600 dark:text-slate-400 text-center">
            Build many small and medium projects to level up.
          </p>
        </div>
        <div className="flex flex-col items-center w-full p-4">
          <Image
            src="/suggested-project.webp"
            alt="Icono 2"
            width={150}
            height={150}
            className="mb-5"
          />
          <h4 className="text-2xl font-bold m-3 text-center">
            Suggested Projects
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-center">
            Select one of the suggested projects here to learn something new or
            reuse techniques already learned.
          </p>
        </div>
        <div className=" flex flex-col items-center w-full p-4">
          <Image
            src="/challenge.webp"
            alt="Icono 3"
            width={150}
            height={150}
            className="mb-5"
          />
          <h4 className="text-2xl font-bold m-3 text-center">
            Challenge Your Skills
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-center">
            We challenge you to practice JavaScript syntax by project creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
