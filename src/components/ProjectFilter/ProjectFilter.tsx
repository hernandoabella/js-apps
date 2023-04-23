import { useState } from "react";

interface FilterValues {
  nameFilter: string;
  ratingFilter: number;
  categoryFilter: number;
}

const ProjectFilter = () => {
  const [filterValues, setFilterValues] = useState<FilterValues>({
    nameFilter: "",
    ratingFilter: 0,
    categoryFilter: 0,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex items-center mr-4">
        <label htmlFor="nameFilter" className="mr-2">
          Nombre del proyecto:
        </label>
        <input
          id="nameFilter"
          name="nameFilter"
          type="text"
          placeholder="Escribe aquí..."
          className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={filterValues.nameFilter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="flex items-center mr-4">
        <label htmlFor="ratingFilter" className="mr-2">
          Dificultad:
        </label>
        <select
          id="ratingFilter"
          name="ratingFilter"
          className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={filterValues.ratingFilter}
          onChange={handleFilterChange}
        >
          <option value={0}>Muy fácil</option>
          <option value={1}>Fácil</option>
          <option value={2}>Intermedio</option>
          <option value={3}>Difícil</option>
          <option value={4}>Muy difícil</option>
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor="categoryFilter" className="mr-2">
          Categoría:
        </label>
        <select
          id="categoryFilter"
          name="categoryFilter"
          className="rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={filterValues.categoryFilter}
          onChange={handleFilterChange}
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
