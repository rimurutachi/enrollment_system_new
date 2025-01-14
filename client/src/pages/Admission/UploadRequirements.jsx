import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import the ProgressHeader component
import "../styles/ProgressHeader.module.css"; // Import CSS module for ProgressHeader
import axios from "axios";

const UploadRequirements = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const [imagePreviews, setImagePreviews] = useState({});
  const [currentStep, setCurrentStep] = useState(4); // Assuming you are on step 4 (Upload Requirements)

  // Handle image change for preview
  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreviews((prev) => ({
          ...prev,
          [key]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle deleting an image
  const handleDeleteImage = (key) => {
    setImagePreviews((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  // Render Upload Box
  const renderUploadBox = (key, label) => (
    <label
      className="upload-box border position-relative"
      style={{
        width: "150px",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
        cursor: "pointer",
        border: "2px dashed #6c757d",
      }}
    >
      {imagePreviews[key] ? (
        <>
          <img
            src={imagePreviews[key]}
            alt="Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <button
            type="button"
            className="btn btn-danger btn-sm position-absolute"
            style={{ top: "5px", right: "5px" }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from triggering file input
              handleDeleteImage(key);
            }}
          >
            X
          </button>
        </>
      ) : (
        <span className="text-muted text-center">{label}</span>
      )}
      <input
        type="file"
        className="form-control d-none"
        accept="image/*"
        onChange={(e) => handleImageChange(e, key)}
      />
    </label>
  );

  const handleSubmit = async () => {
    try {
      // Prepare the data to send (assuming imagePreviews contains base64 encoded images)
      const requirementData = {
        grade11_1st: imagePreviews.grade11_1st,
        grade11_2nd: imagePreviews.grade11_2nd,
        grade12_1st: imagePreviews.grade12_1st,
        grade12_2nd: imagePreviews.grade12_2nd,
        certificate_form_137: imagePreviews.certificate_form_137,
      };

      // Send the POST request
      const response = await axios.post("/UploadRequirements", requirementData);
      console.log("Requirements saved:", response.data);
    } catch (error) {
      console.error("Error saving requirements:", error);
      // Handle the error, e.g., display an error message to the user
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
          <i className="bi bi-paperclip"></i> Requirements
        </h1>
        <hr />
        <form onSubmit={handleSubmit}>
          {/* Grade 11 Report Card */}
          <section className="mb-4">
            <h5>Grade 11 Report Card</h5>
            <div className="d-flex flex-wrap gap-3">
              <div className="col-12 col-md-auto">
                {renderUploadBox("grade11_1st", "1st Semester")}
              </div>
              <div className="col-12 col-md-auto">
                {renderUploadBox("grade11_2nd", "2nd Semester")}
              </div>
            </div>
          </section>
          <hr />

          {/* Grade 12 Report Card */}
          <section className="mb-4">
            <h5>Grade 12 Report Card</h5>
            <div className="d-flex flex-wrap gap-3">
              <div className="col-12 col-md-auto">
                {renderUploadBox("grade12_1st", "1st Semester")}
              </div>
              <div className="col-12 col-md-auto">
                {renderUploadBox("grade12_2nd", "2nd Semester")}
              </div>
            </div>
          </section>
          <hr />

          {/* Certificate of Non-Issuance of Form 137 */}
          <section className="mb-4">
            <h5>Certificate of Non-Issuance of Form 137</h5>
            <div className="row g-3">
              <div className="col-md-6 text-center">
                {renderUploadBox("certificate_form_137", "Upload Certificate")}
              </div>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/EducationalProfile">
              <button type="submit" className="btn btn-success mt-4">
                Back Page
              </button>
            </Link>
            <Link to="/ScheduleAppointment">
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

export default UploadRequirements;
