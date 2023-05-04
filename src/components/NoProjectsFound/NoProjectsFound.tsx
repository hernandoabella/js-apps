import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const NoProjectsFound = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-8 text-gray-500 p-40">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
      <p className="text-center text-lg font-medium">
        ¡Lo siento! No se encontraron proyectos que coincidan con su búsqueda.
      </p>
    </div>
  );
};

export default NoProjectsFound;
