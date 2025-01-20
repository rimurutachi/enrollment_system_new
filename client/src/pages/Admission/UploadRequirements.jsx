import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import the ProgressHeader component
import "../../styles/ProgressHeader.module.css"; // Import CSS module for ProgressHeader
import axios from "axios";
import { toast } from "react-hot-toast";

const UploadRequirements = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [imagePreviews, setImagePreviews] = useState({});
  const [currentStep, setCurrentStep] = useState(4); // Assuming you are on step 4 (Upload Requirements)

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  // Handle image change for specific key
  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Update image previews and form data
        setImagePreviews((prev) => ({
          ...prev,
          [key]: reader.result, // Base64 string for preview
        }));
        setFormData((prev) => ({
          ...prev,
          [key]: file, // File object for upload
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
    setFormData((prev) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) uploadData.append(key, value);
    });

    try {
      const response = await axios.post("/Requirement", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Requirements submitted successfully!");
        goToNextPage();
      }
    } catch (error) {
      toast.error("Failed to upload requirements. Please try again.");
    }
  };

  const goToNextPage = () => {
    setCurrentStep(4);
    navigate("/ScheduleAppointment");
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
            <i className="bi bi-paperclip"></i> Requirements
          </h1>
          <hr />
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
              <button type="submit" className="btn btn-secondary">
                Back Page
              </button>
            </Link>
            <Link to="/ScheduleAppointment">
              <button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleSubmit}
              >
                Next Page
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadRequirements;
