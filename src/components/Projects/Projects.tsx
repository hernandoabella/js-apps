import { SetStateAction, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsData } from "../../../data/ProjectsData";

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
    <section className="dark:text-white dark:bg-slate-900">
      <div>
        {filteredProjects.map((project, index) => (
          <div key={index} className="px-4">
            <ProjectCard
              name={project.name}
              description={project.description}
              difficulty={project.difficulty}
              downloadLink={project.downloadLink}
              demoLink={project.demoLink}
              githubLink={""} htmlCode={""} cssCode={""} javascriptCode={""} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
