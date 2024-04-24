import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsData } from "../../../data/ProjectsData";


const Projects = () => {
  const filteredProjects = projectsData;

  return (
    <section className="dark:text-white dark:bg-slate-900 w-full">
      <div className="grid">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              name={project.name || ""}
              description={project.description || ""}
              difficulty={project.difficulty || 0}
              downloadLink={project.downloadLink || ""}
              demoLink={project.demoLink || ""}
              htmlCode={project.htmlCode || ""}
              cssCode={project.cssCode || ""}
              javascriptCode={project.jsCode || ""}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;