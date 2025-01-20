import React, { useState } from "react";
import styles from "../../styles/FacultyPageAdvising.module.css";
import FacultyPageNavbar from "../../components/Faculty/FacultyPageNavbar";

const FacultyPageAdvising = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const data = [
    {
      studentName: "Mark Loque",
      status: "New Student",
      uploadedFiles: ["Transcript.pdf", "Checklist.jpg"],
      email: "mark.loque@example.com",
      advisingStatus: "Pending",
      course: "Computer Science",
    },
    {
      studentName: "Bern Thegreat",
      status: "Regular",
      uploadedFiles: ["Checklist.pdf"],
      email: "bern.thegreat@example.com",
      advisingStatus: "Accepted",
      course: "Computer Science",
    },
    {
      studentName: "Aziz Bayabao",
      status: "Transferee",
      uploadedFiles: ["TransferCredentials.pdf", "BirthCertificate.pdf"],
      email: "aziz.bayabao@example.com",
      advisingStatus: "Rejected",
      course: "Computer Science",
    },
  ];

  // Filter the data based on the search term
  const filteredData = data.filter((row) =>
    row.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <FacultyPageNavbar />
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by student name..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Status</th>
              <th>Uploaded Files</th>
              <th>Email</th>
              <th>Course</th>
              <th>Advising Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.studentName}</td>
                <td>{row.status}</td>
                <td>
                  {row.uploadedFiles.map((file, fileIndex) => (
                    <div key={fileIndex}>
                      <a href={`/uploads/${file}`} download>
                        {file}
                      </a>
                    </div>
                  ))}
                </td>
                <td>
                  <a href={`mailto:${row.email}`}>{row.email}</a>
                </td>
                <td>{row.course}</td>
                <td>{row.advisingStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyPageAdvising;
