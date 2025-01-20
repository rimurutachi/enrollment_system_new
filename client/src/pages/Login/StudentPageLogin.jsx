import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import styles from "../../styles/StudentLoginPage.module.css";
import Header from "../../components/Login/Header.jsx";

const StudentPageLogin = () => {
  const [credentials, setCredentials] = useState({
    studentID: "",
    password: "",
  });
  const navigate = useNavigate();

  // Redirect to home page if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/StudentPageHome");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Login`, credentials);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        navigate("/StudentPageHome");
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid Student ID or Password.");
    }
  };

  return (
    <div className={styles.studentPage}>
      <div className={styles.left}>
        <Header />
      </div>
      <div className={styles.right}>
        <h2 className={styles.sectionTitle}>Student Login</h2>
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Student ID"
              name="studentID"
              placeholder="Enter your student ID"
              value={credentials.studentID}
              onChange={handleChange}
              required
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", ...props }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} {...props} />
  </div>
);

export default StudentPageLogin;
