import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="px-10 pt-40">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight text-center">
          Top{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-red-400 to-sky-500 lg:inline">
            JavaScript Projects
          </span>{" "}
          to level up your skills
        </h1>
        <p className="text-center px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
          Practice and progress from beginner to expert, refining your
          programming abilities.
        </p>
      </div>
    </div>
  );
};

export default Hero;
