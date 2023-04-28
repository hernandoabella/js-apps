import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        <div className="mt-10">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Aprende haciendo proyectos
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Está íntimamente familiarizado con el entendimiento de que aprender cualquier cosa, especialmente JavaScript, es un proceso oportuno y ocurre al construir muchos proyectos pequeños y medianos, una y otra vez.
                </p>
                <p>
                  Después de todo, esto es exactamente lo que harás en el trabajo (o como pasatiempo), ¿verdad? Cuando selecciones uno de los proyectos sugeridos de este sitio, aprenderás algo nuevo o refrescarás tu memoria reutilizando técnicas que ya has aprendido.
                </p>
                <p>
                  Hay literalmente miles de recursos en Internet que pueden enseñarte la sintaxis de JavaScript, pero hay cero recursos como JS-APPS que te desafían a poner en práctica la sintaxis de JavaScript mediante la creación de proyectos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;