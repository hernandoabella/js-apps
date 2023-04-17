import React from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h2 className={styles.testimonialsTitle}>Testimonios de nuestros clientes</h2>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>"Me encantó la aplicación. Me ayudó a ser más productivo y organizado en mi día a día."</p>
          <div className={styles.testimonialAuthor}>
            <Image src="/path/to/customer1-avatar.jpg" alt="Customer 1" width={60} height={60} className={styles.testimonialAvatar} />
            <div>
              <p className={styles.testimonialName}>Juan Pérez</p>
              <p className={styles.testimonialJob}>CEO en ABC Company</p>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}> "La mejor aplicación que he utilizado. Me permite trabajar en cualquier lugar y momento, sin preocuparme por la seguridad de mis datos."</p>
          <div className={styles.testimonialAuthor}>
            <Image src="/path/to/customer2-avatar.jpg" alt="Customer 2" width={60} height={60} className={styles.testimonialAvatar} />
            <div>
              <p className={styles.testimonialName}>María González</p>
              <p className={styles.testimonialJob}>Diseñadora gráfica freelance</p>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>"Esta aplicación ha cambiado mi vida. Me ayuda a mantenerme enfocado en mis tareas y proyectos, y me permite alcanzar mis metas con mayor facilidad."</p>
          <div className={styles.testimonialAuthor}>
            <Image src="/path/to/customer3-avatar.jpg" alt="Customer 3" width={60} height={60} className={styles.testimonialAvatar} />
            <div>
              <p className={styles.testimonialName}>Ana Ramírez</p>
              <p className={styles.testimonialJob}>Profesora de yoga</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.ctaButton}>Prueba nuestra aplicación ahora</button>
    </div>
  );
};

export default Testimonials;
