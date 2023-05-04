import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/hero-image.jpg";

const Hero: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 100) {
      setTimeout(() => setCounter(counter + 1), 50);
    }
  }, [counter]);

  return (
    <section className="bg-gray-100 p-8 flex md:flex-row ">
      <div className="w-full md:w-1/2 flex items-center px-4 md:px-16">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            <span className="text-blue-500">+{counter}</span> Aplicaciones para practicar JavaScript
          </h1>
          <p className="text-xl lg:text-2xl font-light text-gray-900 my-8">
            ¡Inspírate y crea las mejores aplicaciones JavaScript!
          </p>
          <Link href="/aplicaciones">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg">
              Ver aplicaciones
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center">
        <Image src={heroImage} alt="hero-image" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;