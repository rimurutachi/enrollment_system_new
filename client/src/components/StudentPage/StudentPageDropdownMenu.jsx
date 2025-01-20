import React from "react";
import { Link } from "react-router-dom";

const StudentPageDropdownMenu = () => {
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
          <Link className="dropdown-item" to="/StudentPageProfile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/StudentPageChangePass">
            Change Password
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/LoginPage">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentPageDropdownMenu;
