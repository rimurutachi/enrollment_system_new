import React, { useState } from "react";
import styles from "../../styles/AdminAnnouncements.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import Sidebar from "../../components/Admin/Sidebar.jsx";

const AdminAnnouncements = () => {
  const [recipient, setRecipient] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    if (!recipient || !title || !message) {
      toast.error("Please complete all fields.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Create`, {
        title,
        content: message,
        createdBy: "Admin", // Replace with actual admin info if needed
        recipient,
      });

      if (response.status === 201) {
        toast.success("Announcement sent successfully.");
        setRecipient("");
        setTitle("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending announcement:", error);
      toast.error("An error occurred while sending the announcement.");
    }
  };

  return (
    <div className={`container ${styles.announcementContainer}`}>
      <Sidebar />
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
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                id="title"
                type="text"
                className={`form-control ${styles.customInput}`}
                placeholder="Enter announcement title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
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
