import { SetStateAction, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const projectsData = [
  {
    name: "My project 1",
    description: "Description of my project",
    category: "Images",
    difficulty: 1,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "#",
    imageSrc: "/project-image.webp",
    imageAlt: "Project Image",
  },
  {
    name: "My project 2",
    description: "Description of my project",
    category: "Text",
    difficulty: 2,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "#",
    imageSrc: "/project-image.jpg",
    imageAlt: "Project Image",
  },
  {
    name: "My project 3",
    description: "Description of my project",
    category: "Colors",
    difficulty: 3,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "#",
    imageSrc: "/project-image.jpg",
    imageAlt: "Project Image",
  },
  {
    name: "My project 4",
    description: "Description of my project",
    category: "Colors",
    difficulty: 4,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "#",
    imageSrc: "/project-image.jpg",
    imageAlt: "Project Image",
  },
  {
    name: "My project 5",
    description: "Description of my project",
    category: "Colors",
    difficulty: 5,
    downloadLink: "#",
    githubLink: "#",
    demoLink: "#",
    imageSrc: "/project-image.jpg",
    imageAlt: "Project Image",
  },
];

const Projects = () => {
  const [filterText, setFilterText] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleFilterChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setFilterText(e.target.value);
  };

  const handleDifficultyFilterChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setFilterDifficulty(e.target.value);
  };

  const handleCategoryFilterChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setFilterCategory(e.target.value);
  };

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (filterDifficulty === "" || project.difficulty.toString() === filterDifficulty) &&
      (filterCategory === "" || project.category.toLowerCase() === filterCategory.toLowerCase())
  );

  const difficultyToStars = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return "⭐️";
      case 2:
        return "⭐️⭐️";
      case 3:
        return "⭐️⭐️⭐️";
      case 4:
        return "⭐️⭐️⭐️⭐️";
      case 5:
        return "⭐️⭐️⭐️⭐️⭐️";
      default:
        return "";
    }
  };

  return (
    <div>
      <section>
        <div>
            <div className="flex justify-evenly items-center py-8">
              {/* Filter by name */}
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="categoryFilter" className="mr-2">
                <b>Categoría:</b>
              </label>
              <select
                id="categoryFilter"
                value={filterCategory}
                onChange={handleCategoryFilterChange}
                className="border border-gray-300 rounded py-2 px-4"
              >
                <option value="">All</option>
                <option value="Images">Images</option>
                <option value="Text">Text</option>
                <option value="Colors">Colors</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {filteredProjects.length === 0 && <p>No projects found</p>}

          <div className="flex flex-wrap">
  {filteredProjects.map((project, index) => (
    <div key={index} className="w-1/3 p-8">
      <ProjectCard
        name={project.name}
        description={project.description}
        difficulty={project.difficulty}
        downloadLink={project.downloadLink}
        githubLink={project.githubLink}
        demoLink={project.demoLink}
        imageSrc={project.imageSrc}
        imageAlt={project.imageAlt}
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
