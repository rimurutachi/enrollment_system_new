import React, { useState } from "react";
import styles from "../../styles/FacultyMasterlist.module.css";

const FacultyMasterlist = () => {
  const [teachers] = useState([
    {
      id: 1,
      fullName: "Ivan Lok",
      sectionHandled: "Grade 10 - A",
      subjectHandled: "Mathematics",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Bern Loq",
      sectionHandled: "Grade 9 - B",
      subjectHandled: "Science",
      status: "Inactive",
    },
    {
      id: 3,
      fullName: "Aziz Bayabao",
      sectionHandled: "Grade 11 - STEM",
      subjectHandled: "Physics",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Dominant Dioren",
      sectionHandled: "Grade 12 - ABM",
      subjectHandled: "Accounting",
      status: "Active",
    },
    {
      id: 5,
      fullName: "Joshua Gamedeveloper",
      sectionHandled: "Grade 10 - C",
      subjectHandled: "Computer Science",
      status: "Inactive",
    },
    {
      id: 6,
      fullName: "Gragas Bagares",
      sectionHandled: "Grade 8 - A",
      subjectHandled: "History",
      status: "Active",
    },
    {
      id: 7,
      fullName: "Huxley Wildmutt",
      sectionHandled: "Grade 7 - B",
      subjectHandled: "Biology",
      status: "Active",
    },
    {
      id: 8,
      fullName: "Bok Bok",
      sectionHandled: "Grade 9 - C",
      subjectHandled: "English",
      status: "Inactive",
    },
    {
      id: 9,
      fullName: "James Ragezu",
      sectionHandled: "Grade 12 - STEM",
      subjectHandled: "Chemistry",
      status: "Active",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState(null); // State to hold selected teacher
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleView = (teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeacher(null);
  };

  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by Full Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {/* Teacher Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Section Handled</th>
            <th>Subject Handled</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.fullName}</td>
                <td>{teacher.sectionHandled}</td>
                <td>{teacher.subjectHandled}</td>
                <td>{teacher.status}</td>
                <td>
                  <button
                    className={styles.viewButton}
                    onClick={() => handleView(teacher)}
                  >
                    View
                  </button>
                  <button className={styles.editButton}>Edit</button>
                  <button className={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No teachers found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for Teacher Information */}
      {isModalOpen && selectedTeacher && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Teacher Information</h2>
            <p>
              <strong>ID:</strong> {selectedTeacher.id}
            </p>
            <p>
              <strong>Full Name:</strong> {selectedTeacher.fullName}
            </p>
            <p>
              <strong>Section Handled:</strong> {selectedTeacher.sectionHandled}
            </p>
            <p>
              <strong>Subject Handled:</strong> {selectedTeacher.subjectHandled}
            </p>
            <p>
              <strong>Status:</strong> {selectedTeacher.status}
            </p>
            <button onClick={closeModal} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyMasterlist;
