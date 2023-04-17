import React from "react";
import Image from "next/image";
import { FaDownload, FaGithub, FaStar, FaPlayCircle } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src="/project-image.jpg"
          alt="Project Image"
          width={300}
          height={200}
          layout="responsive"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Nombre del proyecto</h2>
        <p className={styles.description}>
          Descripción del proyecto
        </p>
        <div className={styles.difficulty}>
          <p>Dificultad:</p>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.download}>
            <FaDownload />
            Descargar
          </button>
          <button className={styles.github}>
            <FaGithub />
            GitHub
          </button>
          <button className={styles.demo}>
            <FaPlayCircle />
            Demo
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
