import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage1 from "../../../public/hero-image-1.jpg";
import heroImage2 from "../../../public/hero-image-2.jpg";
import heroImage3 from "../../../public/hero-image-3.jpg";

const Hero: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [heroImages, setHeroImages] = useState([
    heroImage1,
    heroImage2,
    heroImage3,
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (counter < 100) {
      setTimeout(() => setCounter(counter + 1), 20);
    }
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % heroImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="md:px-10 flex flex-col md:flex-row md:items-center dark:bg-slate-900 dark:text-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:px-10 p-8">
        <h1 className="text-4xl md:text-5xl font-bold md:text-left text-center">
          <span className="text-sky-500 dark:text-sky-400 font-bold md:text-left">
            +{counter}{" "}
          </span>
          Aplicaciones para practicar el código de JavaScript
        </h1>
        <p className="text-xl lg:text-2xl my-8 text-center md:text-left text-slate-600 dark:text-slate-400">
          ¡Inspírate y crea las mejores aplicaciones JavaScript!
        </p>
        <Link href="/aplicaciones">
          <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
            Ver aplicaciones
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center hero-image-container">
        <div>
          <Image
            src={heroImages[currentImageIndex]}
            alt="hero-image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <style jsx>{`
        .hero-image-container {
          background-image: url(${heroImages[currentImageIndex]});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-mode .hero-image-container {
          background-color: #1a202c;
          color: #fff;
        }
      `}</style>
    </section>
    
  );
};

export default Hero;
