import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Login/Header.jsx";
import styles from "../../styles/LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles["login-page"]}>
      {/* Left Section */}
      <div className={styles.left}>
        <Header />
        <div className={styles.destination}>
          <p className={styles.title}>Please select your destination</p>
          <button
            className={`${styles.button} ${styles.faculty}`}
            onClick={() => handleNavigation("/FacultyPageLogin")}
          >
            Faculty Login
          </button>
          <button
            className={`${styles.button} ${styles.student}`}
            onClick={() => handleNavigation("/StudentPageLogin")}
          >
            Student Login
          </button>
          <p className={styles.disclaimer}>
            By using this service, you agree to the CvSU Online Services{" "}
            <a href="#" className={styles.link}>
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              Privacy Statement
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <h2 className={styles["section-title"]}>WELCOME, CVSUeño</h2>
        <div className={styles.section}>
          <h3 className={styles["section-header"]}>MANDATE</h3>
          <p>
            Section 2 of Republic Act No. 8468 states: "The University shall
            primarily provide advanced instruction and professional training in
            agriculture, science and technology, education, and other related
            fields, undertake research and extension services, and provide
            progressive leadership in these areas."
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles["section-header"]}>MISSION</h3>
          <p>
            Cavite State University shall provide excellent, equitable and
            relevant educational opportunities in the arts, sciences and
            technology through quality instruction and responsive research and
            development activities. It shall produce professional, skilled and
            morally upright individuals for global competitiveness
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles["section-header"]}>VISION</h3>
          <p>
            The premier university in historic Cavite globally recognized for
            excellence in character development, academics, research,
            innovation, and sustainable community engagement.
          </p>
        </div>
        <div className={styles.marquee}>
          <p>Truth • Excellence • Service</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
