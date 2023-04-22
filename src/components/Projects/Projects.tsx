import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from '../Projects/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>  
    </section>
  );
};

export default Projects;