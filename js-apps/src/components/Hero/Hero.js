// Hero.js

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>¡Bienvenidos a mi proyecto!</h1>
        <p className={styles.subtitle}>Descubre todo lo que tenemos para ofrecerte.</p>
        <button className={styles.ctaButton}>Ver más</button>
      </div>
    </section>
  )
}
