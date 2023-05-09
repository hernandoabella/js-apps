import React from "react";
import Image from "next/image";
import featuredImg from "/public/featured-image.png";
import { FaStar } from "react-icons/fa";

const Featured = () => {
  return (
    <div className="md:px-16 p-8">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
        Aplicaciones destacadas
      </h2>
      <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight sm:text-3xl">
        Descubre algunas de las mejores aplicaciones desarrolladas
      </h3>
      <p className="mt-4 text-base text-gray-500">
      En esta sección encontrarás una cuidadosa selección de las aplicaciones más destacadas. Desde juegos y aplicaciones interactivas hasta herramientas de productividad y utilidades para el día a día, estas aplicaciones son un ejemplo del potencial de JavaScript y de las posibilidades que ofrece JS-APPS como plataforma de desarrollo. Explora estas aplicaciones destacadas y descubre todo lo que puedes hacer con JS-APPS.
      </p>
      <div className="mx-auto  py-12 md:flex md:items-center ">
        <div className="md:w-1/2">
          <Image src={featuredImg} alt="Featured App" className="mx-auto md:w-3/4 lg:w-3/5" />
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Featured App Title</h2>
          <p className="mb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in rutrum purus. Sed non enim tincidunt, varius orci non, fringilla lorem.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Download now</button>
        </div>
      </div>
      
      <div className="py-4">
        <h3 className="text-2xl font-bold mb-8">
          Otras aplicaciones
        </h3>
        <div className="flex flex-wrap -mx-4">
          <div className="text-black px-4 mb-8 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={featuredImg}
                alt="Other App 1"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">Other App 1 Title</h4>
              </div>
            </div>
          </div>
          <div className="text-black px-4 mb-8 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={featuredImg}
                alt="Other App 2"
                className="h-48 w-full object-cover"
                width={400}
                height={100}
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">Other App 2 Title</h4>
              </div>
            </div>
          </div>
          <div className="text-black px-4 mb-8 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={featuredImg}
                alt="Other App 3"
                className="h-48 w-full object-cover"
                width={400}
                height={100}
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">Other App 3 Title</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
