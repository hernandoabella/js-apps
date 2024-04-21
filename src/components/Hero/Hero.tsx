import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
      <div className="relative flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="lg:w-1/2 lg:flex lg:items-center">
          <div>
            <div className="text-sm rounded text-gray-800 bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-gray-200 dark:bg-gray-700/50 dark:border-gray-600/50">
              v1.1 Latest Version
            </div>
            <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
              Discover 300+
              <br />
              <span className="text-sky-400 dark:text-sky-400">
                {" "}
                JavaScript
              </span>{" "}
              Apps <br />for Coding Practice
            </h1>
            <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
              Get inspired and create outstanding applications!
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
              <Link
                href="/apps"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-sky-700 bg-sky-500 text-white hover:text-white hover:bg-sky-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
              >
                <span>Get Started!</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
          <div className="relative mx-5 lg:w-96">
            <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mt-16 -ml-20 dark:border-blue-900"></div>
            {/* <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mt-20 -ml-14 dark:border-blue-950"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mb-16 -mr-20 dark:border-blue-900"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mb-20 -mr-14 dark:border-blue-950"></div>
            <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-800"></div>
            <div className="absolute inset-0 rounded-xl -m-6 rotate-1 bg-gray-300 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75"></div> */}
            <Image
              width={400}
              height={400}
              src="/apps.webp"
              className="relative rounded-lg mx-auto"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;