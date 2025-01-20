import React from "react";
import Header from "../../components/Login/Header.jsx";
import styles from "../../styles/StudentLoginPage.module.css"; // Importing as a module

const StudentPage = () => {
  return (
    <div className={styles.studentPage}>
      {" "}
      {/* Use styles from the module */}
      {/* Left Section */}
      <div className={styles.left}>
        <Header />
      </div>
      {/* Right Section */}
      <div className={styles.right}>
        <h2 className={styles.sectionTitle}>Student Login</h2>
        <div className={styles.loginForm}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="studentID">Student ID</label>
              <input
                type="text"
                id="studentID"
                name="studentID"
                placeholder="Enter your student ID."
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password."
                required
              />
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
