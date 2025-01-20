import React, { useState } from "react";
import styles from "../../styles/AdminAnnouncements.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminAnnouncements = () => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!recipient || !message) {
      alert("Please select a recipient and enter a message.");
      return;
    }
    alert(`Message sent to: ${recipient}\nMessage: ${message}`);
    setRecipient("");
    setMessage("");
  };

  return (
    <div className={`container ${styles.announcementContainer}`}>
      <div className={`card shadow-sm ${styles.customCard}`}>
        <div className={`card-header ${styles.cardHeader}`}>
          <h5 className="mb-0">Send Announcement</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSend}>
            <div className="mb-3">
              <label htmlFor="recipient" className="form-label">
                Select Recipient
              </label>
              <select
                id="recipient"
                className={`form-select ${styles.customSelect}`}
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              >
                <option value="" disabled>
                  Choose...
                </option>
                <option value="Students">Students</option>
                <option value="Faculty">Faculty</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className={`form-control ${styles.customTextarea}`}
                rows="4"
                placeholder="Type your announcement here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-end">
              <button type="submit" className={`btn ${styles.customButton}`}>
                Send Announcement
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAnnouncements;