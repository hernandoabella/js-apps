import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
        Preguntas frecuentes
      </h2>
      <div className="grid gap-5">
        <div className="bg-white shadow rounded-lg">
          <button
            className="flex justify-between w-full px-4 py-3 text-lg font-bold focus:outline-none"
            onClick={() => handleAccordion(0)}
          >
            <h3 className="text-gray-700">¿Cómo usar JS-APPS?</h3>
            <span
              className={
                activeIndex === 0
                  ? "transform rotate-180 transition duration-300"
                  : "transform transition duration-300"
              }
            >
              &#x25B6;
            </span>
          </button>
          <div className={activeIndex === 0 ? "px-4 py-3" : "hidden"}>
              <ol className="list-decimal list-inside">
                    <li className="mb-2">Encuentra un proyecto de Javascript sugerido para construir usando las categorías provistas en la navegación lateral de JSBeginners</li>
                    <li className="mb-2">Lee la descripción y haz clic en el proyecto para verlo en vivo en tu navegador.</li>
                    <li className="mb-2">Clona Git o descarga el código fuente en tu entorno de desarrollo local.</li>
                    <li className="mb-2">ELIMINA por completo el archivo javascript de origen (generalmente llamado app.js) y luego crea el proyecto Javascript tú mismo.</li>
                    <li>Una vez completado, proporciona un enlace a tu proyecto en la sección de comentarios para que otros puedan darte su opinión y reconocimiento.</li>
                </ol>
                
            
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <button
            className="flex justify-between w-full px-4 py-3 text-lg font-bold focus:outline-none"
            onClick={() => handleAccordion(1)}
          >
            <h3 className="text-gray-700">¿Por qué usar JS-APPS?</h3>
            <span
              className={
                activeIndex === 1
                  ? "transform rotate-180 transition duration-300"
                  : "transform transition duration-300"
              }
            >
              &#x25B6;
            </span>
          </button>
          <div className={activeIndex === 1 ? "px-4 py-3" : "hidden"}>
            <p className="text-gray-700"><b>Te proponemos un reto:</b> crear al menos 100 proyectos de JavaScript de distintos niveles por ti mismo antes de adentrarte en un nuevo framework o lenguaje. Es recomendable evitar seguir tutoriales y, en su lugar, ver videos para entender cómo se construye el proyecto. ¡Acepta el desafío y conviértete en un experto en JavaScript!</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <button
            className="flex justify-between w-full px-4 py-3 text-lg font-bold focus:outline-none"
            onClick={() => handleAccordion(2)}
          >
            <h3 className="text-gray-700">¿Cómo puedo contribuir a un proyecto?</h3>
            <span
              className={
                activeIndex === 2
                  ? "transform rotate-180 transition duration-300"
                  : "transform transition duration-300"
              }
            >
              &#x25B6;
            </span>
          </button>
          <div className={activeIndex === 2 ? "px-4 py-3" : "hidden"}>
            <p className="text-gray-700">Puedes encontrar información detallada sobre cómo contribuir en nuestro archivo CONTRIBUTING.md en GitHub: <a href="https://github.com/hernandoabella/js-apps/blob/master/CONTRIBUTING.md" className="text-blue-600 hover:text-blue-800">https://github.com/hernandoabella/js-apps/blob/master/CONTRIBUTING.md</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
