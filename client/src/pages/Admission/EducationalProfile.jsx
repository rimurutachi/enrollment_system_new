import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import ProgressHeader
import axios from "axios";

const EducationalProfile = () => {
  const [currentStep, setCurrentStep] = useState(3); // Assuming this is step 2 in the form
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const educationData = {
        elementary: {
          schoolName: "",
          schoolAddress: "",
          schoolType: "",
          yearGraduated: "",
          
        },
        juniorHigh: {
          schoolName: "",
          schoolAddress: "",
          schoolType: "",
          track: "",
          yearGraduated: "",
        },
        seniorHigh: {
          schoolName: "",
          schoolAddress: "",
          schoolType: "",
          courseProgram: "",
          yearGraduated: "",
        },
      };

      await axios.post("/educations", educationData);
      // Optionally, handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error submitting education data:", error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div
      className="containers"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* ProgressHeader component */}
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />{" "}
      {/* ProgressHeader displayed at the top */}
      {/* Card Container */}
      {/* Card Container */}
      <div
        className="card shadow p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="mb-4">
          <i className="bi bi-mortarboard-fill  "></i> Educational Attainment
        </h1>
        <hr className="divider" />
        <form onSubmit={handleSubmit}>
          {/* Elementary Section */}
          <section className="mb-4">
            <h5 className="text-uppercase">Elementary</h5>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label">School Last Attended:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">School Address:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Type of School:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Year Graduated:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </section>
          <hr className="divider" />

          {/* Junior High School Section */}
          <section className="mb-4">
            <h5 className="text-uppercase">Junior High School</h5>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label">School Last Attended:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">School Address:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Type of School:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Track:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Year Graduated:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </section>
          <hr className="divider" />

          {/* Senior High School Section */}
          <section className="mb-4">
            <h5 className="text-uppercase">Senior High School</h5>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label">School Last Attended:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">School Address:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Type of School:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Course/Program:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Year Graduated:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </section>

          {/* Nav Button */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/FamilyProfile">
              <button type="submit" className="btn btn-success mt-4">
                Back Page
              </button>
            </Link>
            <Link to="/UploadRequirements">
              <button type="submit" className="btn btn-success mt-4">
                Next Page
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationalProfile;
