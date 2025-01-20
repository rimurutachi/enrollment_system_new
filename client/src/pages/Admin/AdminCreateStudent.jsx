import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import styles from "../../styles/AdminCreateStudent.module.css";
import Sidebar from "../../components/Admin/Sidebar.jsx";

const AdminCreateStudent = () => {
  const [student, setStudent] = useState({
    studentId: "",
    fullName: "",
    age: "",
    contactNumber: "",
    class: "",
    section: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudent({ ...student, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/Student", student);
      toast.success("Student created successfully!");
      setStudent({
        studentId: "",
        fullName: "",
        age: "",
        contactNumber: "",
        class: "",
        section: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to create student. Please try again.");
    }
  };

  return (
    <div className={`container ${styles.createStudentContainer}`}>
      <Sidebar />
      <div className={`card shadow-lg ${styles.card}`}>
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Create New Student</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/** Student ID */}
            <InputField
              label="Student ID"
              id="studentId"
              placeholder="Enter student ID"
              value={student.studentId}
              onChange={handleChange}
              required
            />

            {/** Full Name */}
            <InputField
              label="Full Name"
              id="fullName"
              placeholder="Enter full name"
              value={student.fullName}
              onChange={handleChange}
              required
            />

            {/** Age */}
            <InputField
              label="Age"
              id="age"
              type="number"
              placeholder="Enter age"
              value={student.age}
              onChange={handleChange}
              required
            />

            {/** Contact Number */}
            <InputField
              label="Contact Number"
              id="contactNumber"
              type="tel"
              placeholder="Enter contact number"
              value={student.contactNumber}
              onChange={handleChange}
              required
            />

            {/** Class */}
            <InputField
              label="Program"
              id="class"
              placeholder="Enter class (e.g., BSCS, BSHM)"
              value={student.class}
              onChange={handleChange}
              required
            />

            {/** Section */}
            <InputField
              label="Section"
              id="section"
              placeholder="Enter section (e.g., 1-5, 2-3, 4-6)"
              value={student.section}
              onChange={handleChange}
              required
            />

            {/** Password */}
            <InputField
              label="Password"
              id="password"
              type="password"
              placeholder="Enter password"
              value={student.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className={`btn ${styles.submitButton} w-100 mt-3`}
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, id, type = "text", ...props }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input type={type} id={id} className="form-control" {...props} />
  </div>
);

export default AdminCreateStudent;
