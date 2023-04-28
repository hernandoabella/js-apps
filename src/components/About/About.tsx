import React from "react";
import Image from 'next/image'

const About = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Acerca de JS-APPS
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Desafíate a ti mismo como desarrollador de JavaScript
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          JS-APPS selecciona y proporciona proyectos de JavaScript para que puedas seleccionarlos y crearlos por tu cuenta, con el fin de que puedas convertirte en un mejor desarrollador de JavaScript.
        </p>
      </div>
    
      <div className="flex justify-between mt-8">
        {[
          { src: "/icon1.png", alt: "Icono 1", description: "Está íntimamente familiarizado con el entendimiento de que aprender cualquier cosa, especialmente JavaScript, es un proceso oportuno y ocurre al construir muchos proyectos pequeños y medianos, una y otra vez." },
          { src: "/icon2.png", alt: "Icono 2", description: "Después de todo, esto es exactamente lo que harás en el trabajo (o como pasatiempo), ¿verdad? Cuando selecciones uno de los proyectos sugeridos de este sitio, aprenderás algo nuevo o refrescarás tu memoria reutilizando técnicas que ya has aprendido." },
          { src: "/icon3.png", alt: "Icono 3", description: "Hay literalmente miles de recursos en Internet que pueden enseñarte la sintaxis de JavaScript, pero hay cero recursos como JS-APPS que te desafían a poner en práctica la sintaxis de JavaScript mediante la creación de proyectos." }
        ].map((item, index) => (
          <div key={index} className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 flex flex-col items-center">
            <Image src={item.src} alt={item.alt} width={50} height={50} className="mb-2" />
            <p className="text-sm text-gray-500 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default About;