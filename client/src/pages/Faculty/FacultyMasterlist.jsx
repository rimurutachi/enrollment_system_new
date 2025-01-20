import React, { useState } from "react";
import styles from "../../styles/FacultyMasterlist.module.css";
import FacultyPageNavbar from "../../components/Faculty/FacultyPageNavbar";

const FacultyMasterlist = () => {
  const data = [
    {
      schoolYear: "2324",
      subjectCode: "COSC 101",
      studentName: "MARK LOQUE",
      block: "3-5",
      studentnum: "NONE",
      status: "New Student",
      year: "3rd Year",
      enrolled: "NO",
    },
    {
      schoolYear: "2324",
      subjectCode: "COSC 101",
      studentName: "Bern Thegreat",
      block: "3-5",
      studentnum: "2321-11234",
      status: "Regular",
      year: "3rd year",
      enrolled: "YES",
    },
    {
      schoolYear: "2324",
      subjectCode: "COSC 101",
      studentName: "Bern Thegreat",
      block: "3-5",
      studentnum: "2321-11234",
      status: "Irregular",
      year: "3rd year",
      enrolled: "YES",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className={styles.container}>
        <FacultyPageNavbar />
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>School Year</th>
              <th>Subject Code</th>
              <th>Student Name</th>
              <th>Block</th>
              <th>Student Number</th>
              <th>Status</th>
              <th>Year</th>
              <th>Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.schoolYear}</td>
                <td>{row.subjectCode}</td>
                <td>{row.studentName}</td>
                <td>{row.block}</td>
                <td>{row.studentnum}</td>
                <td>{row.status}</td>
                <td>{row.year}</td>
                <td>{row.enrolled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyMasterlist;
