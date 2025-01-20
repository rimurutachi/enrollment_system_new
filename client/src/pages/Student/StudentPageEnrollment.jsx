import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaCheck } from "react-icons/fa"; // Importing FaCheck icon
import styles from "../../styles/StudentPageEnrollment.module.css"; // Importing the CSS module
import StudentPageNavbar from "../../components/StudentPage/StudentPageNavbar.jsx"; // Importing the StudentPageNavbar component

const StduentPageEnrollment = ({ studentData }) => {
  return (
    <div className={`container mt-4 ${styles.container}`}>
      <StudentPageNavbar />
      {/* "Home" text added here above the name */}
      <div className="mb-4">
        <h2 className={styles.homeHeader}>Registration (S.Y. 2425 - First Semester)</h2>
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

          <div className="container mt-5">
            <Card className="shadow-sm">
              <Card.Body>
                {/* Rectangle div containing Status and Section */}
                <div className={styles.statusSectionBox}>
                  <div>
                    <h6>Status: <span className="text-success">Regular (23 Units Allowed)</span></h6>
                  </div>
                  <div>
                    <h6>Section: <span className="text-primary">{studentData?.section || 'BSCS 3 - 5'}</span></h6>
                  </div>
                </div>

                {/* New Rectangle Div containing Enrollment Details */}
                <div className={styles.enrollmentDetailsBox}>
                  <h5 className="text-success">
                    <FaCheck /> You are officially enrolled.
                  </h5>
                  <small className="text-muted">(S.Y. 2425 - First Semester)</small>
                  <br />
                  <Button
                    className={`${styles.customBtn} mt-3`}  // Using customBtn class
                    size="lg"
                    onClick={() => alert('Certificate of Registration PDF will be downloaded')}
                  >
                    Certificate of Registration
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StduentPageEnrollment;