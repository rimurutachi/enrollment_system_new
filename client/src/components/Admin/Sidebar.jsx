import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/AdminSidebar.module.css";
import {
  FaHome,
  FaGraduationCap,
  FaClipboardList,
  FaBullhorn,
  FaChalkboardTeacher, // Import teacher icon
  FaSignOutAlt, // Import logout icon
} from "react-icons/fa";

// Reusable NavLink Component
const SidebarLink = ({ to, icon: Icon, label, subLinks = [] }) => (
  <div className={styles.navGroup}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
      }
    >
      {Icon && <Icon className={styles.icon} />}
      {label}
    </NavLink>
    {subLinks.map((subLink) => (
      <NavLink
        key={subLink.to}
        to={subLink.to}
        className={({ isActive }) =>
          isActive ? `${styles.subNavLink} ${styles.active}` : styles.subNavLink
        }
      >
        &nbsp;&nbsp;• {subLink.label}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const navLinks = [
    {
      to: "/AdminDashboard",
      label: "Home",
      icon: FaHome,
    },
    {
      to: "/AdminFacultyMasterlist",
      label: "Teachers",
      icon: FaChalkboardTeacher,
      subLinks: [
        {
          to: "/AdminCreateFaculty",
          label: "Create Teacher",
        },
        {
          to: "/AdminFacultySchedule",
          label: "Teacher Schedule",
        },
      ],
    },
    {
      to: "/AdminStudentMasterlist",
      label: "Students",
      icon: FaGraduationCap,
      subLinks: [
        {
          to: "/AdminCreateStudent",
          label: "Create Student",
        },
        { to: "/AdminAdmission", label: "Student Admission" },
        {
          to: "/AdminStudentSchedule",
          label: "Student Schedule",
        },
      ],
    },
    {
      to: "/AdminUploadedDocuments",
      label: "Uploaded Documents",
      icon: FaClipboardList,
    },
    {
      to: "/AdminAnnouncements",
      label: "Announcement",
      icon: FaBullhorn,
    },
  ];
  return (
    <div className={styles.sidebar}>
      {/* Logo and Admin Dashboard Title */}
      <div className={styles.logoContainer}>
        <img src="cvsu.png" alt="Logo" className={styles.logo} />
        <h2 className={styles.dashboardTitle}>Admin Dashboard</h2>
      </div>

      {/* Navigation Links */}
      {navLinks.map(({ to, icon, label, subLinks }) => (
        <SidebarLink
          key={to}
          to={to}
          icon={icon}
          label={label}
          subLinks={subLinks}
        />
      ))}

      {/* Log Out Button */}
      <button className={styles.logoutButton}>
        <FaSignOutAlt className={styles.icon} />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
