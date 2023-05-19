import { SetStateAction, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsData } from "../../../data/ProjectsData";
import NoProjectsFound from "../NoProjectsFound/NoProjectsFound";

const Projects = () => {
  const [filterText, setFilterText] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterText(e.target.value);
  };

  const handleDifficultyFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterDifficulty(e.target.value);
  };

  const handleCategoryFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterCategory(e.target.value);
  };

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (filterDifficulty === "" ||
        project.difficulty.toString() === filterDifficulty) &&
      (filterCategory === "" ||
        project.category.toLowerCase() === filterCategory.toLowerCase())
  );

  return (
    <div>
      <section>
        <div>
          <div className="w-full px-8 md:flex md:items-center md:justify-center">
            {/* Filter by name */}
            <div className="m-4">
              <label htmlFor="filterInput" className="mr-2">
                <b>Nombre del proyecto:</b>
              </label>
              <input
                type="text"
                id="filterInput"
                value={filterText}
                onChange={handleFilterChange}
                className="border border-gray-300 rounded py-2 px-4"
              />
            </div>
            {/* Filter by difficulty */}
            <div className="m-4">
              <label htmlFor="difficultyFilter" className="mr-2">
                <b>Dificultad:</b>
              </label>
              <select
                id="difficultyFilter"
                value={filterDifficulty}
                onChange={handleDifficultyFilterChange}
                className="border border-gray-300 rounded py-2 px-4"
              >
                <option value="">Todo</option>
                <option value="1">Muy fácil 🐣</option>
                <option value="2">Fácil 🌺</option>
                <option value="3">Intermedio 🌈</option>
                <option value="4">Difícil 🦾</option>
                <option value="5">Muy Difícil 🚀</option>
              </select>
            </div>

            {/* Filter by category */}
            <div className="m-4">
              <label htmlFor="categoryFilter" className="mr-2">
                <b>Categoría:</b>
              </label>
              <select
                id="categoryFilter"
                value={filterCategory}
                onChange={handleCategoryFilterChange}
                className="border border-gray-300 rounded py-2 px-4"
              >
                <option value="">Todo</option>
                <option value="Images">Images</option>
                <option value="Text">Text</option>
                <option value="Colors">Colors</option>
              </select>
            </div>
          </div>

          {filteredProjects.length === 0 && <NoProjectsFound />}

          <div className="flex flex-wrap md:container md:mx-auto">
            {filteredProjects.map((project, index) => (
              <div key={index} className="w-full sm:w/1 md:w-1/2 lg:w-1/3 p-4">
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  difficulty={project.difficulty}
                  downloadLink={project.downloadLink}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  category={project.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
