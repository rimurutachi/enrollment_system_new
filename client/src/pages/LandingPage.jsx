import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../styles/LandingPage.module.css";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate("/LoginPage"); // Redirect to LoginPage
  };

  const handleAdmissionClick = () => {
    navigate("/RegistrationForm");
  }

  const majors = [
    { name: "Creative Arts", icon: "bi bi-brush" },
    { name: "Health Sciences and Medical Studies", icon: "bi-heart" },
    { name: "Information Technology", icon: "bi-laptop" },
    { name: "Language and Linguistics", icon: "bi-translate" },
    { name: "Social Sciences", icon: "bi-people" },
  ];

  return (
    <div className={styles.App}>
      <div className={styles.topBar}>
        <div
          className={`container d-flex justify-content-between align-items-center`}
        >
          <div className={styles.socialLinks}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <button className={`btn ${styles.btn}`}>Skip to Content</button>
        </div>
      </div>

      <header className="bg-light py-3">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src="cvsu.png"
                alt="University Logo"
                className="logo-inline mr-2"
                style={{ width: "50px" }}
              />
              <h1 className={`${styles.headerText} display-6 mb-0`}>
                CvSU - Bacoor Campus
              </h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`navbar-collapse justify-content-end ${
                isOpen ? "show" : "collapse"
              }`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#profile">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#schoolportal"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleLoginClick(); // Redirect to LoginPage
                    }}
                  >
                    School Portal
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#information">
                    Information
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#programs">
                    School Programs
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={`${styles.heroSection} d-flex align-items-center`}>
          <div className={styles.heroOverlay}>
            <div className="container text-center">
              <h1 className={`${styles.heading} display-4`}>
                TRUTH · EXCELLENCE · SERVICE
              </h1>
              <p className={`${styles.lead} lead`}>
                The Cavite State University (CvSU) has its humble beginnings in
                1906
              </p>
              <div className={`${styles.buttonGroup} mt-4`}></div>
            </div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className={`${styles.infoCards} container py-5`}>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className={`${styles.card} p-3 shadow-sm`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleAdmissionClick(); // Redirect to LoginPage
              }}
              >
                <i
                  className={`${styles.cardIcon} fas fa-university fa-3x mb-3`}
                ></i>
                <p className={styles.cardText}>Admission/Enrollment Page</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`${styles.card} p-3 shadow-sm`}>
                <i className={`${styles.cardIcon} fas fa-globe fa-3x mb-3`}></i>
                <p className={styles.cardText}>Website Links</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`${styles.card} p-3 shadow-sm`}>
                <i className={`${styles.cardIcon} fas fa-book fa-3x mb-3`}></i>
                <p className={styles.cardText}>Academic Information System</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={`${styles.card} p-3 shadow-sm`}>
                <i
                  className={`${styles.cardIcon} fas fa-info-circle fa-3x mb-3`}
                ></i>
                <p className={styles.cardText}>
                  Admission Information for New Learners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className={`${styles.videoSection} py-5`}>
          <div className="container text-center">
            <div className={`${styles.videoPlaceholder} mb-4`}>
              <i className="fas fa-play fa-2x"></i>
            </div>
            <div className="row">
              <div className="col-md-3">
                <p className={`${styles.statNumber} text-success`}>8</p>
                <p className="text-muted">Total Majors</p>
              </div>
              <div className="col-md-3">
                <p className={`${styles.statNumber} text-success`}>100</p>
                <p className="text-muted">Total Faculty</p>
              </div>
              <div className="col-md-3">
                <p className={`${styles.statNumber} text-success`}>5600</p>
                <p className="text-muted">Total Students</p>
              </div>
              <div className="col-md-3">
                <p className={`${styles.statNumber} text-success`}>35</p>
                <p className="text-muted">Extracurricular</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row align-items-center">
            {/* Left Side: Text Content */}
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              <h2 className="mb-3">Discover Our School</h2>
              <p className="text-muted">
                Tellus in metus vulputate eu scelerisque felis imperdiet proin.
                Adipiscing diam donec adipiscing tristique risus nec feugiat.
                Nascetur ridiculus mus mauris vitae ultricies leo.
              </p>
              <div className="mt-4">
                <strong>Mrs Joanna McQuaid</strong>
                <br />
                Kepala Sekolah
              </div>
              <img
                src="signature.png"
                alt="Signature"
                className="d-block mt-3 mx-auto mx-lg-0"
                style={{ maxWidth: "150px" }}
              />
            </div>

            {/* Right Side: Green Background */}
            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
              <div className={styles.greenBackground}>
                <div className={`${styles.icon} ${styles.topLeft}`}>
                  <i className="fas fa-flask"></i>
                </div>
                <div className={`${styles.icon} ${styles.topRight}`}>
                  <i className="fas fa-futbol"></i>
                </div>
                <div className={`${styles.icon} ${styles.bottomRight}`}>
                  <i className="fas fa-book"></i>
                </div>
                <img
                  src="placeholder.png"
                  alt="School Content"
                  className={styles.placeholderImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.whyChooseSection}>
          <div className="container">
            <h2 className="text-center">Why Choose Us</h2>
            <p className="text-center">
              Tellus in metus vulputate eu scelerisque felis imperdiet proin.
              Adipiscing diam donec adipiscing tristique risus nec feugiat.
              Nascetur ridiculus mus mauris vitae ultricies leo.
            </p>
            <div className={styles.whyChooseGrid}>
              <div className={styles.card}>
                <i className="fas fa-seedling text-success"></i>
                <h5>Holistic Education</h5>
                <p>
                  Our school believes in fostering the overall development of
                  students. Alongside academics, we focus on character,
                  creativity, and values.
                </p>
              </div>
              <div className={styles.card}>
                <i className="fas fa-globe text-primary"></i>
                <h5>Global Perspective</h5>
                <p>
                  Our curriculum is designed to foster global citizenship,
                  promoting cultural understanding and opportunities.
                </p>
              </div>
              <div className={styles.card}>
                <i className="fas fa-balance-scale text-warning"></i>
                <h5>Character Education</h5>
                <p>
                  We emphasize the importance of character development,
                  instilling values such as integrity, empathy, and
                  responsibility.
                </p>
              </div>
              <div className={styles.card}>
                <i className="fas fa-user-graduate text-info"></i>
                <h5>Career Guidance</h5>
                <p>
                  As students progress through their academic journey, we
                  provide comprehensive career guidance and counseling.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.section} ${styles.specializationSection}`}
        >
          <div className="container text-center py-5">
            <h2 className={`${styles.title} mb-3`}>Specialization Majors</h2>
            <p className={`${styles.description} mb-4`}>
              In the realm of higher education, specialization majors play a
              crucial role in shaping the career paths of aspiring
              professionals. These specialized fields of study allow students to
              delve deeply into specific subjects, acquiring in-depth knowledge.
            </p>
            <button
              className={`${styles.viewAllButton} btn btn-outline-success mb-4`}
            >
              View All
            </button>
            <div className="row">
              {majors.map((major, index) => (
                <div
                  key={index}
                  className="col-md-4 col-lg-3 mb-4 d-flex align-items-center justify-content-center"
                >
                  <div
                    className={`${styles.majorCard} d-flex flex-column align-items-center p-3`}
                  >
                    <i
                      className={`${major.icon} mb-2`}
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h5 className={`${styles.majorTitle} mt-2`}>
                      {major.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;