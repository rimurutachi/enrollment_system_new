import React, { useState } from "react";
import styles from "../../styles/StudentPageChangePass.module.css"; // Importing the CSS module
import StudentPageNavbar from "../../components/StudentPage/StudentPageNavbar.jsx";

const StudentPageChangePass = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }
    console.log("Password changed successfully!");
  };

  return (
    <div className={`container mt-4 ${styles.container}`}>
      <StudentPageNavbar />
      {/* Header Section */}
      <div className="mb-4">
        <h2 className={styles.homeHeader}>Change Password</h2>
      </div>

      {/* Main Card */}
      <div className="card shadow-sm">
        <div className="card-body">
          {/* Header inside the card */}
          <div className="mb-4">
            <h4 className={styles.header}>
              LOQUE, MARK IVANBERN S. (20222-61615-MN-0)
            </h4>
          </div>

          {/* Form to change password */}
          <div className={`container ${styles.container}`}>
            <form>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter old password"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                />
              </div>

              {/* Change Password Button */}
              <button
                type="button"
                className={`w-100 ${styles.changeButton}`} // Apply custom style here
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPageChangePass;