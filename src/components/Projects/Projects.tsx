import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectFilter from "../ProjectFilter/ProjectFilter";
import styles from "../Projects/Projects.module.css";

const Projects = () => {
  return (
    <div>
      <section>
        <ProjectFilter />
      </section>
      <section className={styles.projects}>
      <div className={styles.container}>
        <ProjectCard
          name="Mi proyecto 1"
          description="Descripción de mi proyecto"
          difficulty={3}
          downloadLink="https://ejemplo.com/download"
          githubLink="https://github.com/ejemplo/proyecto"
          demoLink="https://ejemplo.com/demo"
          imageSrc={"/project-image.jpg"}
          imageAlt={"project image"}
        />
        <ProjectCard
          name="Mi proyecto 2"
          description="Descripción de mi proyecto"
          difficulty={2}
          
          downloadLink="https://ejemplo.com/download"
          githubLink="https://github.com/ejemplo/proyecto"
          demoLink="https://ejemplo.com/demo"
          imageSrc={"/project-image.jpg"}
          imageAlt={"project image"}
        />
         <ProjectCard
          name="Mi proyecto 3"
          description="Descripción de mi proyecto"
          difficulty={1}
          downloadLink="https://ejemplo.com/download"
          githubLink="https://github.com/ejemplo/proyecto"
          demoLink="https://ejemplo.com/demo"
          imageSrc={"/project-image.jpg"}
          imageAlt={"project image"}
        />
      </div>
    </section>
    </div>
    
  );
};

export default Projects;
