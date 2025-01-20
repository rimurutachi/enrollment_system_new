import React from "react";
import styles from "../../styles/StudentPageProfile.module.css";
import StudentPageNavbar from "../../components/StudentPage/StudentPageNavbar.jsx";

const StudentPageProfile = () => {
  return (
    <div className={`container mt-4 ${styles.container}`}>
      <StudentPageNavbar />
      {/* "Home" text added here above the name */}
      <div className="mb-4">
        <h2 className={styles.homeHeader}>Personal Data</h2>
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

          {/* Profile Form */}
          <div className={`container ${styles.profileContainer}`}>
            <form>
              {/* Row 1 */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Student Number</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value=""
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value=""
                    readOnly
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Gender</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value=""
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Date of Birth</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value=""
                    readOnly
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Place of Birth</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value=""
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Mobile No.</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value=""
                    readOnly
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    value=""
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Name of Spouse (if married)</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Name of Spouse"
                    readOnly
                  />
                </div>
              </div>

              {/* Row 5 */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Residential Address</label>
                  <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    value=""
                    readOnly
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Permanent Address</label>
                  <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    value=""
                    readOnly
                  ></textarea>
                </div>
              </div>

              {/* Certification Checkbox */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="certifyCheck"
                  defaultChecked
                />
                <label className="form-check-label small" htmlFor="certifyCheck">
                  I hereby certify that all the information provided are true and correct to the best of my knowledge.
                </label>
              </div>

              {/* Save Button */}
              <button type="button" className="btn btn-success btn-sm">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPageProfile;