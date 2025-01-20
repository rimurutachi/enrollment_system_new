import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./StudentPageDropdownMenu"; // Import DropdownMenu component
import styles from "../../styles/StudentPageNavbar.module.css"; // Scoped CSS

const StudentPageNavbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        {/* Brand Logo and Name */}
        <NavLink
          className="navbar-brand text-forestgreen d-flex align-items-center"
          to="/"
        >
          <img
            src="/cvsu.png"
            alt="Logo"
            width="30"
            height="30"
            className="me-2"
          />
          CvSU
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { path: "/StudentPageHome", label: "Home" },
              { path: "/StudentPageEnrollment", label: "Enrollment" },
              { path: "/StudentPageAccounts", label: "Accounts" },
              { path: "/StudentPageSchedule", label: "Schedule" },
              { path: "/StudentPageGrades", label: "Grades" },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                  to={path}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Dropdown Menu */}
          <DropdownMenu />
        </div>
      </div>
    </nav>
  );
};

export default StudentPageNavbar;
