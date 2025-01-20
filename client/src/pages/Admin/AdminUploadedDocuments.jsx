import React from "react";
import styles from "../../styles/AdminUploadedDocuments.module.css";
import Sidebar from "../../components/Admin/Sidebar.jsx";

const AdminUploadedDocuments = () => {
  // Default document data
  const documents = [
    {
      id: 1,
      facultyName: "John Doe",
      documentName: "Lesson Plan",
      uploadDate: "2025-01-15",
      status: "Approved",
    },
    {
      id: 2,
      facultyName: "Jane Smith",
      documentName: "Class Schedule",
      uploadDate: "2025-01-12",
      status: "Pending",
    },
    {
      id: 3,
      facultyName: "Alice Brown",
      documentName: "Research Paper",
      uploadDate: "2025-01-10",
      status: "Rejected",
    },
  ];

  return (
    <div className={`container ${styles.uploadedDocumentsContainer}`}>
      <Sidebar />
      <div className="card shadow-lg">
        <div className={`card-header ${styles.cardHeader}`}>
          <h3 className={styles.headerTitle}>Uploaded Documents</h3>
        </div>
        <div className="card-body">
          <table className={`table table-striped table-hover ${styles.table}`}>
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Faculty Name</th>
                <th>Document Name</th>
                <th>Upload Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.facultyName}</td>
                  <td>{doc.documentName}</td>
                  <td>{doc.uploadDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        doc.status === "Approved"
                          ? "bg-success"
                          : doc.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {doc.status}
                    </span>
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

export default AdminUploadedDocuments;
