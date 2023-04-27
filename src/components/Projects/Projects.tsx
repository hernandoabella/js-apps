import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "../Projects/Projects.module.css";

const Projects = () => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const filteredProjects = [
    {
      name: "Mi proyecto 1",
      description: "Descripción de mi proyecto",
      difficulty: 3,
      downloadLink: "https://ejemplo.com/download",
      githubLink: "https://github.com/ejemplo/proyecto",
      demoLink: "https://ejemplo.com/demo",
      imageSrc: "/project-image.webp",
      imageAlt: "project image",
      categoria: "Texto",
    },
    {
      name: "Mi proyecto 2",
      description: "Descripción de mi proyecto",
      difficulty: 2,
      downloadLink: "https://ejemplo.com/download",
      githubLink: "https://github.com/ejemplo/proyecto",
      demoLink: "https://ejemplo.com/demo",
      imageSrc: "/project-image.webp",
      imageAlt: "project image",
      categoria: "Imágenes",
    },
    {
      name: "Mi proyecto 3",
      description: "Descripción de mi proyecto",
      difficulty: 1,
      downloadLink: "https://ejemplo.com/download",
      githubLink: "https://github.com/ejemplo/proyecto",
      demoLink: "https://ejemplo.com/demo",
      imageSrc: "/project-image.webp",
      imageAlt: "project image",
      categoria: "Color",
    },
  ].filter((project) => project.name.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div>
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className="mb-4">
            <label htmlFor="filterInput" className="mr-2">
              Filter by name:
            </label>
            <input
              type="text"
              id="filterInput"
              value={filterText}
              onChange={handleFilterChange}
              className="border border-gray-300 rounded py-2 px-4"
            />
          </div>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              difficulty={project.difficulty}
              downloadLink={project.downloadLink}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              categoria={project.categoria}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
