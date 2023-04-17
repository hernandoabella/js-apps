import React from 'react';
import styles from './Featured.module.css';
import featuredImg from '/public/featured-image.png';

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.appContainer}>
        <div className={styles.app}>
          <image src={featuredImg} alt="Featured App" className={styles.appImage} />
          <h2 className={styles.appTitle}>Featured App Title</h2>
          <p className={styles.appDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in rutrum purus. Sed non enim tincidunt, varius orci non, fringilla lorem.</p>
          <button className={styles.ctaButton}>Download now</button>
        </div>
        <div className={styles.otherApps}>
          <div className={styles.otherApp}>
            <image src="/public/featured-image.png" alt="Other App 1" className={styles.otherAppImage} />
            <h3 className={styles.otherAppTitle}>Other App 1 Title</h3>
          </div>
          <div className={styles.otherApp}>
            <image src="/path/to/other-image2.jpg" alt="Other App 2" className={styles.otherAppImage} />
            <h3 className={styles.otherAppTitle}>Other App 2 Title</h3>
          </div>
          <div className={styles.otherApp}>
            <image src="/path/to/other-image3.jpg" alt="Other App 3" className={styles.otherAppImage} />
            <h3 className={styles.otherAppTitle}>Other App 3 Title</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
