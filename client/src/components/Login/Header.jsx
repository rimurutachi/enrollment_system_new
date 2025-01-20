import React from 'react';
import styles from '../../styles/LoginPage.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/cvsu.png" alt="CvSU Logo" className={styles.logo} />
      <div className={styles['university-title']}>
        <h1 className={styles['header-title']}>CAVITE STATE UNIVERSITY</h1>
        <h2 className={styles['header-subtitle']}>BACOOR CAMPUS</h2>
      </div>
    </div>
  );
};

export default Header;