import React from "react";
import Image from 'next/image';
import styles from "./Hero.module.css";
import heroImage from "../../../public/hero-image.jpg";
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.grid}`}>
        <div className={`${styles.text} ${styles['hero-text']}`}>
          <h1 className={`${styles.title} ${styles['hero-title']}`}><span className={styles['highlight']}>+100</span> aplicaciones para practicar JavaScript</h1>
          <p className={`${styles.description} ${styles['hero-description']}`}>
            ¡Inspírate y crea las mejores aplicaciones en JavaScript! Aplicaciones de JavaScript para mejorar tus habilidades como desarrollador.
          </p>
          <Link href="/aplicaciones">
            <button className={`${styles.button} ${styles['hero-button']}`}>Ver aplicaciones</button>
          </Link>
        </div>
        <div className={`${styles.image} ${styles['hero-image']}`}>
          <Image src={heroImage} alt="Hero" width={600} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Hero;