import React, { useState, useEffect } from "react";
import styles from "../../styles/StudentPageHome.module.css"; // You can further customize these styles
import StudentPageNavbar from "../../components/StudentPage/StudentPageNavbar.jsx";
import axios from "axios";

const StudentPageHome = () => {
  const [announcements, setAnnouncements] = useState([]);

  // Fetch announcements from the backend on component mount
  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const response = await axios.get("/Announcement", {
          params: { recipient: "Students" }, // Pass recipient as query parameter
        });
        setAnnouncements(response.data || []);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };
    loadAnnouncements();
  }, []);

  return (
    <div className={`container mt-4 ${styles.container}`}>
      <StudentPageNavbar />
      {/* "Home" text added here above the name */}
      <div className="mb-4">
        <h2 className={styles.homeHeader}>Home</h2>
      </div>

      {/* Main card wrapper for all content */}
      <div className="card shadow-sm">
        <div className="card-body">
          {/* Header Section inside the card */}
          <div className="mb-4">
            <h4 className={styles.header}>
              LOQUE, MARK IVANBERN S. (20222-61615-MN-0)
            </h4>
          </div>

          {/* Content Section - All in One Div */}
          <div className="row">
            {/* Left Menu */}
            <div className="col-md-3 col-sm-12 mb-4">
              <div className={`card ${styles.menuCard} shadow-sm`}>
                <div className="card-body">
                  <a href="#" className={`d-block mb-2 ${styles.menuItem}`}>
                    Announcements ({announcements.length})
                  </a>
                  <a href="#" className={`d-block mb-2 ${styles.menuItem}`}>
                    Graduation Clearance
                  </a>
                  <a href="#" className={`d-block mb-2 ${styles.menuItem}`}>
                    Submit Feedback
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content (Right Section) */}
            <div className="col-md-9 col-sm-12">
              {/* Memorandum Section */}
              <div className="card shadow-sm mb-4">
                <div className="card-body d-flex align-items-center">
                  <div className={styles.memoIcon}>
                    <i className="bi bi-file-earmark-arrow-down"></i>
                  </div>
                  <div className="ms-3">
                    <a
                      href="/files/CvSU Internship MOA.docx"
                      download
                      className={styles.memoLink}
                    >
                      CvSU Internship Memorandum of Agreement
                    </a>
                    <p className={styles.memoUpdate}>
                      Last updated: November 25, 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Announcements Section */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="mb-3">Announcements</h5>
                  <ul className="list-group">
                    {announcements.length === 0 ? (
                      <p>No announcements available</p>
                    ) : (
                      announcements.map((announcement) => (
                        <li
                          key={announcement._id} // Use _id as key for MongoDB documents
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <i className="bi bi-megaphone-fill text-primary me-2"></i>
                          <div>
                            <strong>{announcement.title}</strong>
                            <p className="mb-0">{announcement.content}</p>
                            <small className={styles.announcementDate}>
                              {new Date(
                                announcement.createdAt
                              ).toLocaleString()}
                            </small>
                          </div>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPageHome;
