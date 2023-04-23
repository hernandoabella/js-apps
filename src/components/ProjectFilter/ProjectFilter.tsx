import React from "react";

const ProjectFilter = () => {
  return (
    <div className="flex justify-between py-4 px-8 bg-gray-100">
      <div className="flex flex-col mr-4">
        <input
          type="text"
          placeholder="Filtrar por nombre"
          className="rounded-lg border border-gray-400 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <select className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <option value={0}>Filtrar por dificultad</option>
          <option value={1}>1 estrella</option>
          <option value={2}>2 estrellas</option>
          <option value={3}>3 estrellas</option>
          <option value={4}>4 estrellas</option>
          <option value={5}>5 estrellas</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600 font-medium mb-2">Categoría:</label>
        <select className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <option value={0}>Todas las categorías</option>
          <option value={1}>Diseño gráfico</option>
          <option value={2}>Desarrollo web</option>
          <option value={3}>Marketing</option>
          <option value={4}>Redes sociales</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectFilter;
