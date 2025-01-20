import React, { useState } from "react";
import styles from "../../styles/AdminCreateFaculty.module.css";
import Sidebar from "../../components/Admin/Sidebar.jsx";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdminCreateFaculty = () => {
  const [facultyData, setFacultyData] = useState({
    facultyId: "",
    fullName: "",
    age: "",
    contactNumber: "",
    sections: "",
    subject: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFacultyData({ ...facultyData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/Faculty", facultyData);
      toast.success(response.data.message);
      setFacultyData({
        facultyId: "",
        fullName: "",
        age: "",
        contactNumber: "",
        sections: "",
        subject: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className={`container ${styles.createTeacherContainer}`}>
      <Sidebar />
      <div className={`card shadow-lg ${styles.card}`}>
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Create New Faculty</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label
                  htmlFor="facultyId"
                  className={`form-label ${styles.label}`}
                >
                  Faculty ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="facultyId"
                  value={facultyData.facultyId}
                  onChange={handleChange}
                  placeholder="Enter faculty ID"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label
                  htmlFor="fullName"
                  className={`form-label ${styles.label}`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  value={facultyData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="age" className={`form-label ${styles.label}`}>
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  value={facultyData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  min="18"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label
                  htmlFor="contactNumber"
                  className={`form-label ${styles.label}`}
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  value={facultyData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label
                  htmlFor="sections"
                  className={`form-label ${styles.label}`}
                >
                  Sections
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sections"
                  value={facultyData.sections}
                  onChange={handleChange}
                  placeholder="Enter sections"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label
                  htmlFor="subject"
                  className={`form-label ${styles.label}`}
                >
                  Subject
                </label>
                <select
                  className="form-select"
                  id="subject"
                  value={facultyData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a subject</option>
                  <option value="DCIT 21">DCIT 21</option>
                  <option value="DCIT 22">DCIT 22</option>
                  <option value="DCIT 24">DCIT 24</option>
                  <option value="DCIT 26">DCIT 26</option>
                  <option value="DCIT 50">DCIT 50</option>
                  <option value="DCIT 60">DCIT 60</option>
                  <option value="DCIT 65">DCIT 65</option>
                  <option value="DCIT 26">DCIT 26</option>
                  <option value="COSC 100">COSC 100</option>
                  <option value="COSC 101">COSC 101</option>
                  <option value="COSC 105">COSC 105</option>
                  <option value="COSC 111">COSC 111</option>
                  <option value="COSC 200">COSC 200</option>
                  <option value="COSC 50">COSC 50</option>
                  <option value="COSC 55">COSC 55</option>
                  <option value="COSC 60">COSC 60</option>
                  <option value="COSC 75">COSC 75</option>
                  <option value="COSC 80">COSC 80</option>
                  <option value="COSC 85">COSC 85</option>
                  <option value="COSC 200">COSC 200</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className={`form-label ${styles.label}`}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={facultyData.email}
                  onChange={handleChange}
                  placeholder="Enter CvSU Email"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label
                  htmlFor="password"
                  className={`form-label ${styles.label}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={facultyData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </div>
            </div>
            <button
              type="submit"
              className={`btn ${styles.submitButton} w-100 mt-3`}
            >
              Add Faculty
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateFaculty;
