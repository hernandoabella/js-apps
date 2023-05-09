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
    }, 10000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="flex flex-col md:flex-row md:items-center mx-8">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:px-10 p-8">
        <h1 className="text-4xl md:text-5xl font-bold md:text-left text-center">
          <span className="text-indigo-600 text-4xl md:text-5xl lg:text-5xl font-bold md:text-left">
            +{counter}{" "}
          </span>
          Aplicaciones para practicar JavaScript
        </h1>
        <p className="text-xl lg:text-2xl my-8 text-center md:text-left text-gray-500">
          ¡Inspírate y crea las mejores aplicaciones JavaScript!
        </p>
        <Link href="/aplicaciones">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg">
            Ver aplicaciones
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div>
          <Image
            src={heroImages[currentImageIndex]}
            alt="hero-image"
            className="w-full"
          />
        </div>
        <style jsx>{`
          .image-container {
            transition: opacity 0.5s ease-in-out;
          }
          .image-container img {
            width: 100%;
          }
          .dark-mode {
            background-color: #1a202c;
            color: #fff;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
