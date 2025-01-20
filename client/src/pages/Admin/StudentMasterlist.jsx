import React, { useState } from 'react';
import styles from '../../styles/StudentMasterlist.module.css';

const StudentMasterlist = () => {
  // Define some sample student data
  const [students] = useState([
    { id: 1, firstName: 'Ivan', lastName: 'Lok', studentType: 'Regular', course: 'BSCS', dob: '2002-05-15', contact: '123-456-7890' },
    { id: 2, firstName: 'Bern', lastName: 'Loq', studentType: 'Irregular', course: 'BSCS', dob: '2003-07-21', contact: '987-654-3210' },
    { id: 3, firstName: 'Aziz', lastName: 'Bayabao', studentType: 'Shiftee', course: 'BSCS', dob: '2001-03-10', contact: '555-123-4567' },
    { id: 4, firstName: 'Dominant', lastName: 'Dioren', studentType: 'Shiftee', course: 'BSCS', dob: '2002-11-05', contact: '111-222-3333' },
    { id: 5, firstName: 'Joshua', lastName: 'Gamedeveloper', studentType: 'Shiftee', course: 'BSCS', dob: '2000-09-25', contact: '222-333-4444' },
    { id: 6, firstName: 'Gragas', lastName: 'Bagares', studentType: 'Shiftee', course: 'BSCS', dob: '2001-08-30', contact: '333-444-5555' },
    { id: 7, firstName: 'Huxley', lastName: 'Wildmutt', studentType: 'Shiftee', course: 'BSCS', dob: '2003-06-18', contact: '444-555-6666' },
    { id: 8, firstName: 'Bok', lastName: 'Bok', studentType: 'Shiftee', course: 'BSCS', dob: '2002-12-12', contact: '555-666-7777' },
    { id: 9, firstName: 'James', lastName: 'Ragezu', studentType: 'Shiftee', course: 'BSCS', dob: '2000-01-14', contact: '666-777-8888' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null); // State to hold selected student
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const filteredStudents = students.filter(student =>
    student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleView = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by Last Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {/* Student Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Student Type</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.studentType}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    className={styles.viewButton}
                    onClick={() => handleView(student)}
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
              <td colSpan="6">No students found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for Student Information */}
      {isModalOpen && selectedStudent && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Student Information</h2>
            <p><strong>ID:</strong> {selectedStudent.id}</p>
            <p><strong>Full Name:</strong> {selectedStudent.firstName} {selectedStudent.lastName}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Date of Birth:</strong> {selectedStudent.dob}</p>
            <p><strong>Contact Number:</strong> {selectedStudent.contact}</p>
            <button onClick={closeModal} className={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentMasterlist;