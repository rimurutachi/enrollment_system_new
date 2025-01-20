import React, { useEffect, useState } from 'react';
import styles from '../../styles/StudentPageSchedule.module.css';
import StudentPageNavbar from '../../components/StudentPage/StudentPageNavbar.jsx'

const StudentPageSchedule = () => {
  const [subjects, setSubjects] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('/api/subjects'); // Update with your API endpoint
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error('Failed to fetch subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className={`container mt-4 ${styles.container}`}>
      <StudentPageNavbar />
      {/* School Year outside the card */}
      <div className="mb-4">
        <h2 className={styles.schoolYearHeader}>School Year 2425 - First Semester</h2>
      </div>

      {/* Main card wrapper for all content */}
      <div className="card">
        <div className="card-body">
          {/* Header Section inside the card */}
          <div className="mb-4">
            <h5 className={styles.header}>LOQUE, MARK FUCKINGBERN (20222-61615-MN-0)</h5>
          </div>

          {/* Table Section */}
          <div className="table-responsive">
            <table className={`table ${styles.table}`}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject Code</th>
                  <th>Description</th>
                  <th>Lec</th>
                  <th>Lab</th>
                  <th>Unit</th>
                  <th>Schedule</th>
                  <th>Faculty</th>
                </tr>
              </thead>
              <tbody>
                {subjects.length > 0 ? (
                  subjects.map((subject) => (
                    <tr key={subject.id}>
                      <td>{subject.id}</td>
                      <td>{subject.code}</td>
                      <td>{subject.description}</td>
                      <td>{subject.lec}</td>
                      <td>{subject.lab}</td>
                      <td>{subject.unit}</td>
                      <td>{subject.schedule}</td>
                      <td>{subject.faculty}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPageSchedule;