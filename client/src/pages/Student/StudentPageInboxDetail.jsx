import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import styles from "../../styles/StudentPageHome.module.css"; // Import CSS modules

const StudentPageInboxDetail = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleClick = (id) => {
    navigate(`/inbox/${id}`); // Navigate to the detailed message view
  };

  return (
    <div className={`container mt-4 ${styles.container}`}>
      <h4 className={styles.header}>LOQUE, MARK IVANBERN S. (2023-10101-MN-0)</h4>
      <div className="row mt-3">
        <div className="col-md-8">
          <div className={`card mb-4 ${styles.card}`}>
            <div className="card-body">
              <ul className="list-group">
                <li className={`list-group-item ${styles.nonClickableItem}`}>
                  Inbox
                </li>
                <li
                  className={`list-group-item ${styles.clickableItem}`}
                  onClick={() => handleClick(1)}
                >
                  November 11, 2024: Wews
                </li>
                <li
                  className={`list-group-item ${styles.clickableItem}`}
                  onClick={() => handleClick(2)}
                >
                  May 14, 2024: AWIT Development Talk 2024
                </li>
                <li
                  className={`list-group-item ${styles.clickableItem}`}
                  onClick={() => handleClick(3)}
                >
                  March 4, 2024: ASDFAS for Graduating Students - PUP Career Fest
                  2024
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.listGroup}>
            <a href="#" className={`${styles.sidebarLink}`}>
              Inbox (3)
            </a>
            <a href="#" className={`${styles.sidebarLink}`}>
              Graduation Clearance
            </a>
            <a href="#" className={`${styles.sidebarLink}`}>
              Submit Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPageInboxDetail;