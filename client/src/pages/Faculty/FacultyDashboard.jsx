import React, { useState, useEffect } from "react";
import styles from "../../styles/FacultyDashboard.module.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import FacultyPageNavbar from "../../components/Faculty/FacultyPageNavbar";

const FacultyDashboard = () => {
  const [announcements, setAnnouncements] = useState([]);

  // Function to fetch announcements from the backend
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Announcement`, {
        params: { recipient: "Faculty" }, // Pass recipient as query parameter
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching announcements:", error);
      toast.error("Failed to load announcements. Please try again later.");
      return [];
    }
  };

  // Fetch announcements from the backend on component mount
  useEffect(() => {
    const loadAnnouncements = async () => {
      const fetchedAnnouncements = await fetchAnnouncements();
      setAnnouncements(fetchedAnnouncements || []);
    };
    loadAnnouncements();
  }, []);

  return (
    <div className={`container mt-4 ${styles.container}`}>
      <FacultyPageNavbar />
      <h4 className={styles.header}>Welcome, Faculty Member</h4>
      <div className="row mt-3">
        {/* Main Content */}
        <div className="col-md-9">
          {/* Announcements Section */}
          <div className={`card ${styles.mainCard} ${styles.announcementCard}`}>
            <div className="card-body">
              <h5 className={styles.announcementHeader}>Announcements</h5>
              {announcements.length > 0 ? (
                <ul className={styles.announcementList}>
                  {announcements.map((announcement) => (
                    <li
                      key={announcement._id} // Use _id as key for MongoDB documents
                      className={styles.announcementItem}
                    >
                      <strong>{announcement.title}</strong>
                      <p>{announcement.content}</p>
                      <small className={styles.announcementDate}>
                        {new Date(announcement.createdAt).toLocaleString()}
                      </small>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.noAnnouncements}>
                  No announcements available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
