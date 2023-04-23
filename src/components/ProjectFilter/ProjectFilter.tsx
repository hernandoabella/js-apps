import React from "react";
import { FaStar } from "react-icons/fa";

const ProjectFilter = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex items-center mr-4">
        <label htmlFor="nameFilter" className="mr-2">
          Filtrar por nombre:
        </label>
        <input
          id="nameFilter"
          type="text"
          placeholder="Escribe aquí..."
          className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="flex items-center mr-4">
        <label htmlFor="ratingFilter" className="mr-2">
          Filtrar por dificultad:
        </label>
        <select
          id="ratingFilter"
          className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="<FaStar />"> 1 estrella</option>
          <option value={1}><FaStar  /> 2 estrellas</option>
          <option value={2}><FaStar  /> 3 estrellas</option>
          <option value={3}><FaStar  /> 4 estrellas</option>
          <option value={4}><FaStar  /> 5 estrellas</option>
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor="categoryFilter" className="mr-2">
          Filtrar por categoría:
        </label>
        <select
          id="categoryFilter"
          className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value={0}>Todas las categorías</option>
          <option value={1}>Texto</option>
          <option value={2}>Imágenes</option>
          <option value={3}>Color</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectFilter;
