import React, { useState } from "react";
import styles from "../../styles/AdminAdmission.module.css";
import Sidebar from "../../components/Admin/Sidebar.jsx";

const AdminAdmission = () => {
  // Sample admission data with useState to allow status updates
  const [admissions, setAdmissions] = useState([
    {
      id: 1,
      studentName: "Michael Johnson",
      program: "Computer Science",
      admissionDate: "2025-01-15",
      status: "Admitted",
      emailAddress: "michael.johnson@email.com", // Added email address
      documents: [
        "Grade 11 Report Card",
        "Grade 12 Report Card",
        "Certificate of Non-Issuance of Form 137",
      ],
    },
    {
      id: 2,
      studentName: "Emma Thompson",
      program: "Business Administration",
      admissionDate: "2025-01-12",
      status: "Pending",
      emailAddress: "emma.thompson@email.com", // Added email address
      documents: [
        "Grade 11 Report Card",
        "Grade 12 Report Card",
        "Certificate of Non-Issuance of Form 137",
      ],
    },
    {
      id: 3,
      studentName: "Liam Brown",
      program: "Mechanical Engineering",
      admissionDate: "2025-01-10",
      status: "Rejected",
      emailAddress: "liam.brown@email.com", // Added email address
      documents: [
        "Grade 11 Report Card",
        "Grade 12 Report Card",
        "Certificate of Non-Issuance of Form 137",
      ],
    },
  ]);

  // Function to handle admission status update (accept or reject)
  const handleStatusChange = (id, newStatus) => {
    setAdmissions((prevAdmissions) =>
      prevAdmissions.map((admission) =>
        admission.id === id ? { ...admission, status: newStatus } : admission
      )
    );
  };

  return (
    <div className={`container ${styles.studentAdmissionContainer}`}>
      <Sidebar />
      <div className="card shadow-lg">
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Student Admission Details</h3>
        </div>
        <div className="card-body">
          <table className={`table table-striped table-hover ${styles.table}`}>
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Program</th>
                <th>Admission Date</th>
                <th>Status</th>
                <th>Email Address</th> {/* New Email Address column */}
                <th>Documents</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((admission) => (
                <tr key={admission.id}>
                  <td>{admission.id}</td>
                  <td>{admission.studentName}</td>
                  <td>{admission.program}</td>
                  <td>{admission.admissionDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        admission.status === "Admitted"
                          ? "bg-success"
                          : admission.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {admission.status}
                    </span>
                  </td>
                  <td>{admission.emailAddress}</td>{" "}
                  {/* Displaying email address */}
                  <td>
                    <ul>
                      {admission.documents.map((document, index) => (
                        <li key={index}>{document}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    {admission.status === "Pending" && (
                      <div>
                        <button
                          className={`btn btn-success ${styles.actionButton}`}
                          onClick={() =>
                            handleStatusChange(admission.id, "Admitted")
                          }
                        >
                          Accept
                        </button>
                        <button
                          className={`btn btn-danger ${styles.actionButton}`}
                          onClick={() =>
                            handleStatusChange(admission.id, "Rejected")
                          }
                        >
                          Reject
                        </button>
                      </div>
                    )}
                    {admission.status === "Admitted" && (
                      <button className="btn btn-success" disabled>
                        Already Admitted
                      </button>
                    )}
                    {admission.status === "Rejected" && (
                      <button className="btn btn-danger" disabled>
                        Already Rejected
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAdmission;
