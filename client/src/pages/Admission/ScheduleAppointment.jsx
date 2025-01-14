import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import the ProgressHeader component
import axios from "axios";
import Swal from "sweetalert2";

const ScheduleAppointment = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const [currentStep, setCurrentStep] = useState(5); // Assuming you are on step 5 (Schedule Appointment)

  const [formData, setFormData] = useState({
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/ScheduleAppointment", formData);
      console.log("Schedule saved:", formData);

      // Show SweetAlert2 notification
      Swal.fire({
        icon: "success",
        title: "Admission Form Submitted!",
        text: "Thank you for submitting your application. You will be redirected shortly.",
        showConfirmButton: false,
        timer: 3000, // 3 seconds
      });

      // Redirect to registration form after a delay
      setTimeout(() => {
        navigate("/RegistrationForm"); // Redirect to the registration form page
      }, 3000);
    } catch (error) {
      console.error("Error saving schedule:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div
      className="card shadow p-4"
      style={{
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Include ProgressHeader at the top */}
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div
        className="card shadow p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="mb-4">
          <i className="bi bi-calendar2-week"></i> Schedule Appointment
        </h1>
        <hr />
        <form onSubmit={handleSubmit}>
          {/* Preferred Date */}
          <div className="mb-4">
            <label htmlFor="preferredDate" className="form-label">
              Preferred Date:
            </label>
            <input
              type="date"
              id="preferredDate"
              className="form-control"
              style={{
                width: "300px",
              }}
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>

          {/* Preferred Time */}
          <div className="mb-4">
            <label htmlFor="preferredTime" className="form-label">
              Preferred Time:
            </label>
            <input
              type="time"
              id="preferredTime"
              className="form-control"
              style={{
                width: "300px",
              }}
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/UploadRequirements">
              <button className="btn btn-success">Back Page</button>
            </Link>
            <button type="submit" className="btn btn-success">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
