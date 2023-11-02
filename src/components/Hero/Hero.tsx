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
            v2.0 Latest Version
          </div>
          <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
            Next generation <span className="text-blue-600 dark:text-blue-500">website builder</span>
          </h1>
          <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
            Super fast and easy to use software to power your next idea or build your client’s web projects. Get it today and profit.
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
            <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
              <svg className="hi-mini hi-arrow-down-tray inline-block w-5 h-5 opacity-75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"/><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"/></svg>
              <span>Download for free</span>
            </a>
            <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
        <div className="relative mx-5 lg:w-96">
          <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mt-16 -ml-20 dark:border-blue-900"></div>
          <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mt-20 -ml-14 dark:border-blue-950"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mb-16 -mr-20 dark:border-blue-900"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mb-20 -mr-14 dark:border-blue-950"></div>
          <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-800"></div>
          <div className="absolute inset-0 rounded-xl -m-6 rotate-1 bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75"></div>
          <Image width={100} height={100} src="/public/photo-RSCirJ70NDM-800x1000.jpg" className="relative rounded-lg mx-auto shadow-lg" alt="Hero Image" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;
