import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from '../Projects/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className="categoria">
        <div className="categoria-texto">
          <h1 className="cat-title">📝 Texto</h1>
          <p className="cat-description">Explora nuestras aplicaciones de texto para potenciar tus habilidades de escritura y mejorar tu comunicación. Desde editores de texto hasta aplicaciones de notas y organización, tenemos lo que necesitas para escribir con facilidad y eficiencia.</p>
        </div>
        <div className={styles.container}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
