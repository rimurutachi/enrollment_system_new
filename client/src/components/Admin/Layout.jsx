import React from "react";
import Sidebar from "./Sidebar.jsx";
import styles from "../../styles/AdminLayout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;