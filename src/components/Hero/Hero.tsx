import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage1 from "../../../public/hero-image-1.jpg";
import heroImage2 from "../../../public/hero-image-2.jpg";
import heroImage3 from "../../../public/hero-image-3.jpg";

const Hero: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [heroImages, setHeroImages] = useState([heroImage1, heroImage2, heroImage3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (counter < 100) {
      setTimeout(() => setCounter(counter + 1), 50);
    }
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="bg-white flex flex-col md:flex-row md:items-center">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:px-10 p-8">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 text-center md:text-left">
          <span className="text-blue-500">+{counter}</span> Aplicaciones para practicar JavaScript
        </h1>
        <p className="text-xl lg:text-2xl font-light text-gray-900 my-8 text-center md:text-left">
          ¡Inspírate y crea las mejores aplicaciones JavaScript!
        </p>
        <Link href="/aplicaciones">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg">
            Ver aplicaciones
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="image-container mt-8">
          <Image src={heroImages[currentImageIndex]} alt="hero-image" className="w-full" />
        </div>
        <style jsx>{`
          .image-container {
            transition: opacity 0.5s ease-in-out;
          }
          .image-container img {
            width: 100%;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
