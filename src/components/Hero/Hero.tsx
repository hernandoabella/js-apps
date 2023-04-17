import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "../../../public/hero-image.jpg";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start py-6 px-6 md:px-0 md:pl-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="text-blue-500">+100</span> aplicaciones para practicar JavaScript
          </h1>
          <p className="text-xl lg:text-2xl font-light text-gray-900 my-8">
            ¡Inspírate y crea las mejores aplicaciones en JavaScript! Aplicaciones de JavaScript para mejorar tus habilidades como desarrollador.
          </p>
          <Link href="/aplicaciones">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg">
              Ver aplicaciones
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 py-6 hidden lg:block">
          <Image src={heroImage} alt="Hero" width={600} height={400} className="rounded-lg" />
        </div>
      </div>
    </section>

  );
};

export default Hero;