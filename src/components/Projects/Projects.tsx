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
    <div className="dark:text-white dark:bg-slate-900">
      <section>
        <div>
          <div className="px-4 md:px-20 flex flex-col items-center md:flex-row md:justify-center">
            {/* Filter by name */}
            <div className="w-full">
              <input
                type="text"
                id="filterInput"
                value={filterText}
                onChange={handleFilterChange}
                className="w-full dark:border border-slate-300 rounded dark:bg-slate-800"
                placeholder="Contador..."
              />
            </div>
            {/* Filter by difficulty */}
            <div className="w-full m-4">
              <select
                title="Seleccionar dificultad"
                id="difficultyFilter"
                value={filterDifficulty}
                onChange={handleDifficultyFilterChange}
                className="w-full border border-gray-300 rounded dark:bg-slate-800"
              >
                <option value="">Dificultad</option>
                <option value="1">Muy fácil 🐣</option>
                <option value="2">Fácil 🌺</option>
                <option value="3">Intermedio 🌈</option>
                <option value="4">Difícil 🦾</option>
                <option value="5">Muy Difícil 🚀</option>
              </select>
            </div>

            {/* Filter by category */}
            <div className="w-full">
              <select
                title="Seleccionar categoría"
                id="categoryFilter"
                value={filterCategory}
                onChange={handleCategoryFilterChange}
                className="w-full border border-gray-300 rounded dark:bg-slate-800"
              >
                <option value="">Categoría</option>
                <option value="Imagen">Imagen</option>
                <option value="Contador">Contador</option>
                <option value="Texto">Texto</option>
                <option value="Emojis">Emojis</option>
                <option value="Color">Color</option>
                <option value="Validacion">Validación</option>
                <option value="Calculadora">Calculadora</option>
                <option value="Matematicas">Matemáticas</option>
                <option value="Audio">Audio</option>
                <option value="Extra">Extra</option>
              </select>
            </div>
          </div>

          {filteredProjects.length === 0 && <NoProjectsFound />}

          <div>
            <div className="flex flex-wrap md:px-10 lg:px-20 xl:px-20">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 xl:1/3 p-4"
                >
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    difficulty={project.difficulty}
                    downloadLink={project.downloadLink}
                    githubLink={project.githubLink}
                    demoLink={project.demoLink}
                    category={project.category}
                    htmlCode={project.htmlCode || ""}
                    cssCode={project.cssCode || ""}
                    jsCode={project.jsCode || ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
