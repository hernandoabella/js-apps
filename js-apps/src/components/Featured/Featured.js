import styles from "./Featured.module.css";

const FeaturedProjects = ({ projects }) => {
  return (
    <section className={styles.featuredProjects}>
      <h2>Proyectos destacados</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Ver proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
