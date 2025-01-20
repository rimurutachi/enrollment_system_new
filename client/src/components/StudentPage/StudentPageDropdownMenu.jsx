import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const StudentPageDropdownMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the authentication token
    localStorage.removeItem("token");

    // Show success toast notification
    toast.success("Logged out successfully!");

    // Redirect to the login page
    navigate("/StudentPageLogin");

    // Prevent the user from navigating back to protected pages
    setTimeout(() => {
      window.location.reload(); // Force a reload to reset the state
    }, 0);
  };  

  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <i className="bi bi-person-circle"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item"
            onClick={() => navigate("/StudentPageProfile")}
          >
            Profile
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => navigate("/StudentPageChangePass")}
          >
            Change Password
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={handleLogout}>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default StudentPageDropdownMenu;
