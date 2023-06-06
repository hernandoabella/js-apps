import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-20 p-8 sm:px-6 md:px-16 dark:bg-slate-900 dark:text-white">
      <div className="text-center lg:text-left">
        <h2 className="text-base text-center text-sky-600 dark:text-sky-400 font-semibold tracking-wide uppercase mb-5">
          Acerca de JS-APPS
        </h2>
        <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight sm:text-3xl text-center">
          Desafía tu habilidad como desarrollador de JavaScript
        </h3>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400 text-center">
          JS-APPS proporciona proyectos de JavaScript para que puedas desafiarte
          a ti mismo y convertirte en un mejor desarrollador.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between mt-20 md:flex-row">
        <div className="mb-8 sm:mb-0 sm:mr-4 flex flex-col items-center mx-4">
          <Image
            src="/icon1.png"
            alt="Icono 1"
            width={80}
            height={80}
            className="mb-5"
          />
          <h4 className="text-2xl font-bold m-3 text-center">
            Aprende Haciendo
          </h4>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center">
            Construye muchos proyectos pequeños y medianos para mejorar tus
            habilidades.
          </p>
        </div>
        <div className="mb-8 sm:mb-0 flex flex-col items-center">
          <Image
            src="/icon2.png"
            alt="Icono 2"
            width={80}
            height={80}
            className="mb-5"
          />
          <h4 className="text-2xl font-bold m-3 text-center">
            Proyectos Sugeridos
          </h4>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center">
            Selecciona uno de los proyectos sugeridos aquí para aprender algo
            nuevo o reutilizar técnicas ya aprendidas.
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <Image
            src="/icon3.png"
            alt="Icono 3"
            width={80}
            height={80}
            className="mb-5"
          />
          <h4 className="text-2xl font-bold m-3 text-center">
            Desafía Tus Habilidades
          </h4>
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center">
            <em>
              <b>JS-APPS</b>
            </em>{" "}
            desafía a los desarrolladores a practicar la sintaxis de JavaScript
            mediante la creación de proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
