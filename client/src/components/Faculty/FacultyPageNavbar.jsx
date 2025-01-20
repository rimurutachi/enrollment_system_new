import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./FacultyPageDropdownMenu.jsx";
import styles from "../../styles/StudentPageNavbar.module.css"; // Scoped CSS

const FacultyPageNavbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <NavLink className="navbar-brand text-forestgreen" to="/">
          <img src="/cvsu.png" alt="Logo" width="30" className="me-2" />
          CvSU
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                to="/FacultyDashboard"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                to="/FacultyMasterlist"
              >
                Masterlist
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                to="/FacultyPageSchedule"
              >
                Schedule
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                to="/FacultyPageAdvising"
              >
                Advising
              </NavLink>
            </li>
          </ul>
        </div>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default FacultyPageNavbar;
