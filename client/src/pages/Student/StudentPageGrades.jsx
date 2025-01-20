import React, { useState, useEffect } from "react";
import styles from "../../styles/StudentPageGrades.module.css";
import StudentPageNavbar from "../../components/StudentPage/StudentPageNavbar.jsx";

const StudentPageGrades = () => {
  const [studentData, setStudentData] = useState(null);
  const [subjects, setSubjects] = useState([]); // Ensure this is an empty array
  const [gpa, setGpa] = useState("Grades Not Complete");

  // Simulate fetching data from an API with random info
  useEffect(() => {
    const fetchData = () => {
      // Sample student data
      const studentInfo = {
        admissionStatus: "Continuing",
        scholasticStatus: "Regular",
        courseCode: "BSCS",
        courseDescription: "Bachelor of Science in Computer Science",
      };

      // Sample subjects data
      const subjectList = [
        { code: "Sub1", description: "Subject", faculty: "A", units: 2.0, section: "BSCPE 2-4", grade: "3.5", status: "Passed" },
        { code: "Sub2", description: "Subject", faculty: "B", units: 4.0, section: "BSCPE 2-4", grade: "3.0", status: "Passed" },
        { code: "Sub3", description: "Subject", faculty: "C", units: 3.0, section: "BSCPE 2-4", grade: "1.5", status: "Passed" },
        { code: "Sub4", description: "Subject", faculty: "M", units: 3.0, section: "BSCPE 2-4", grade: "2.0", status: "Passed" },
        { code: "Sub5", description: "Subjectn", faculty: "C", units: 3.0, section: "BSCPE 2-4", grade: "3.0", status: "Passed" },
        { code: "Sub6", description: "Subject", faculty: "M", units: 3.0, section: "BSCPE 2-4", grade: "1.0", status: "Passed" },
        { code: "Sub7", description: "Subject", faculty: "C", units: 3.0, section: "BSCPE 2-4", grade: "2.5", status: "Passed" },
        { code: "Sub8", description: "Subject", faculty: "S", units: 2.0, section: "BSCPE 2-4", grade: "1.75", status: "Passed" },
      ];

      setStudentData(studentInfo);
      setSubjects(subjectList);
    };

    fetchData();
  }, []);

  if (!studentData || !subjects.length) {
    return <div>Loading...</div>;
  }

  return (
        <div className={`container mt-4 ${styles.container}`}>
          <StudentPageNavbar />
          {/* "Home" text added here above the name */}
          <div className="mb-4">
            <h2 className={styles.homeHeader}>Grades</h2>
          </div>
    
          {/* Main card wrapper for all content */}
          <div className="card shadow-sm">
            <div className="card-body">
              {/* Header Section inside the card */}
              <div className="mb-4">
                <h4 className={styles.header}>
                  LOQUE, MARK FUCKINGBERN (20222-61615-MN-0)
                </h4>
              </div>
    <div className={`container ${styles.container}`}>
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">School Year 2024-2025 First Semester</h5>
        </div>
        <div className="card-body">
          {/* Status Section */}
          <div className="row align-items-center g-1 mb-4">
            <div className="col-md-3">
              <p className={`${styles.statusText} mb-0`}>
                <span className="fw-bold">Admission Status:</span> {studentData.admissionStatus}
              </p>
            </div>
            <div className="col-md-3">
              <p className={`${styles.statusText} mb-0`}>
                <span className="fw-bold">Scholastic Status:</span> {studentData.scholasticStatus}
              </p>
            </div>
            <div className="col-md-6">
              <p className={`${styles.statusText} mb-0`}>
                <span className="fw-bold">Course Code & Description:</span> {studentData.courseCode} - {studentData.courseDescription}
              </p>
            </div>
          </div>

          {/* GPA Section */}
          <div className="mb-4">
            <p className="text-muted mb-0">
              <span className="fw-bold">GPA (excludes NSTP and subjects with non-numeric ratings):</span>
            </p>
            <p className="text-muted mb-0">{gpa}</p>
          </div>

          {/* Grades Table */}
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Subject Code</th>
                <th>Description</th>
                <th>Faculty Name</th>
                <th>Units</th>
                <th>Section Code</th>
                <th>Final Grade</th>
                <th>Grade Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(subjects) && subjects.length > 0 ? (
                subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{subject.code}</td>
                    <td>{subject.description}</td>
                    <td>{subject.faculty}</td>
                    <td>{subject.units}</td>
                    <td>{subject.section}</td>
                    <td>{subject.grade}</td>
                    <td>{subject.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">No subjects available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default StudentPageGrades;