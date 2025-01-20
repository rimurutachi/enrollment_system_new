import React, { useState } from "react";
import Header from "../../components/Login/Header.jsx";
import styles from "../../styles/StudentLoginPage.module.css"; // Importing as a module
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const FacultyPageLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/FacultyLogin", credentials);
      const { token, message } = response.data;

      // Save the token to localStorage
      localStorage.setItem("token", token);

      // Show success toast
      toast.success(message);

      // Redirect to FacultyDashboard
      navigate("/FacultyDashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid email or password");
    }
  };

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
        <h2 className={styles.sectionTitle}>Faculty Login</h2>
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">CvSU Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your CvSU Email here."
                value={credentials.email}
                onChange={handleChange}
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
                value={credentials.password}
                onChange={handleChange}
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

export default FacultyPageLogin;
