import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import the ProgressHeader component
import axios from "axios";
import { toast } from "react-hot-toast";

const ScheduleAppointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    preferredDate: "",
    preferredTime: "",
  });
  const [currentStep, setCurrentStep] = useState(5);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Schedule`, formData);
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setFormData({ preferredDate: "", preferredTime: "" });
        toast.success("Appointment scheduled successfully!");
        navigate("/RegistrationForm");
      }
    } catch (error) {
      toast.error("An error occurred while scheduling the appointment.");
      console.error(error);
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
      <form onSubmit={handleSubmit}>
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
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/UploadRequirements">
              <button className="btn btn-secondary">Back Page</button>
            </Link>
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
