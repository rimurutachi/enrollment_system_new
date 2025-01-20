import React, { useState, useEffect } from "react";
import styles from "../../styles/StudentPageHome.module.css"; // You can further customize these styles
import StudentPageNavbar from "../../components/StudentPage/StudentPageNavbar.jsx";

const StudentPageHome = () => {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch messages from the backend on component mount
  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await fetchMessages();
      setMessages(fetchedMessages || []);
    };
    loadMessages();
  }, []);

  const handleMessageClick = (id) => {
    const message = messages.find((msg) => msg.id === id);
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

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
              LOQUE, MARK FUCKINGBERN (20222-61615-MN-0)
            </h4>
          </div>

          {/* Content Section - All in One Div */}
          <div className="row">
            {/* Left Menu */}
            <div className="col-md-3 col-sm-12 mb-4">
              <div className={`card ${styles.menuCard} shadow-sm`}>
                <div className="card-body">
                  <a href="#" className={`d-block mb-2 ${styles.menuItem}`}>
                    Inbox ({messages.length})
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

              {/* Inbox Section */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="mb-3">Inbox</h5>
                  <ul className="list-group">
                    {messages.length === 0 ? (
                      <p>No messages available</p>
                    ) : (
                      messages.map((message) => (
                        <li
                          key={message.id}
                          className="list-group-item d-flex justify-content-between align-items-center"
                          onClick={() => handleMessageClick(message.id)}
                        >
                          <i className="bi bi-envelope-fill text-danger me-2"></i>
                          {message.title}
                          <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-printer"></i>
                          </button>
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

      {/* Modal for selected message */}
      {showModal && selectedMessage && (
        <div
          className="modal show fade"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedMessage.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedMessage.content}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentPageHome;
