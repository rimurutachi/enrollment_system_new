import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import "../../styles/ApplicantProfile.module.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const ApplicantProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Load initial state from local storage
  const loadInitialState = () => {
    const savedFormData = localStorage.getItem("applicantProfileFormData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          familyName: "",
          givenName: "",
          middleName: "",
          suffix: "",
          dateOfBirth: "",
          contactNumber: "",
          religion: "",
          nationality: "",
          sex: "",
          age: "",
          civilStatus: "",
          emailAddress: "",
          unitNumber: "",
          streetName: "",
          subBarangay: "",
          cityMunicipality: "",
          province: "",
          zipCode: "",
          hasDisability: false,
          partOfIndigenousGroup: false,
          photo: null,
        };
  };

  const [formData, setFormData] = useState(loadInitialState);
  const [imagePreview, setImagePreview] = useState(formData.photo || null);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(1); // Set current step to 2 (Applicant Profile)

  useEffect(() => {
    // Save form data to local storage on change
    localStorage.setItem("applicantProfileFormData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value || "", // Ensure value is never undefined or null
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeInKB = file.size / 1024;
      if (fileSizeInKB > 200) {
        setErrorMessage(
          "File size exceeds 200 KB. Please upload a smaller image."
        );
        return;
      }
      setErrorMessage("");
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handlePreviewClick = () => {
    fileInputRef.current.click();
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    setCurrentStep(0);
    navigate("/RegistrationForm");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Applicant`, formData);
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Applicant Profile submitted successfully!");
        goToNextPage();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit. Please try again.");
    }
  };

  const goToNextPage = () => {
    setCurrentStep(1);
    navigate("/FamilyProfile");
  };

  return (
    <div>
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <form onSubmit={handleSubmit}>
        <div
          className="card shadow p-4"
          style={{ borderRadius: "10px", backgroundColor: "#fff" }}
        >
          <h1 className="mb-4 text-center">
            <i className="bi bi-person-fill"></i> Personal Information
          </h1>
          <div className="row">
            <div className="col-md-3 text-center">
              <div
                className="border rounded"
                style={{
                  width: "150px",
                  height: "150px",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                onClick={handlePreviewClick}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <span className="text-muted">
                    Click to upload
                    <br />
                    2x2 Photo
                  </span>
                )}
              </div>
              <input
                type="file"
                className="d-none"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
              />
              {errorMessage && (
                <div className="text-danger mt-2">{errorMessage}</div>
              )}
            </div>
            <div className="col-md-9">
              <h5>Personal Information</h5>
              <div className="row g-3">
                {[
                  { label: "Family Name", name: "familyName" },
                  { label: "Given Name", name: "givenName" },
                  { label: "Middle Name", name: "middleName" },
                  { label: "Suffix", name: "suffix", optional: true },
                  { label: "Date of Birth", name: "dateOfBirth", type: "date" },
                  { label: "Contact Number", name: "contactNumber" },
                  { label: "Religion", name: "religion" },
                  { label: "Nationality", name: "nationality" },
                  { label: "Age", name: "age", type: "number" },
                  { label: "Email Address", name: "emailAddress" },
                ].map(({ label, name, type = "text", optional = false }) => (
                  <div className="col-md-6" key={name}>
                    <label className="form-label">
                      {label}{" "}
                      {optional && (
                        <span className="text-muted">(Optional)</span>
                      )}
                    </label>
                    <input
                      type={type}
                      name={name}
                      className="form-control"
                      value={formData[name]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
                <div className="col-md-6">
                  <label className="form-label">Sex</label>
                  <select
                    className="form-select"
                    name="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Civil Status</label>
                  <select
                    className="form-select"
                    name="civilStatus"
                    value={formData.civilStatus}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="in a relationship">In a Relationship</option>
                    <option value="married">Married</option>
                  </select>
                </div>
              </div>
              <h5 className="mt-4">Permanent Address</h5>
              <div className="row g-3">
                {[
                  "unitNumber",
                  "streetName",
                  "subBarangay",
                  "cityMunicipality",
                  "province",
                  "zipCode",
                ].map((field) => (
                  <div className="col-md-4" key={field}>
                    <label className="form-label">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="text"
                      name={field}
                      className="form-control"
                      value={formData[field] || ""} // Ensure value is never undefined or null
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
              <h5 className="mt-4">Other Information</h5>
              {[
                { label: "I have a disability", name: "hasDisability" },
                {
                  label: "I am part of an indigenous group",
                  name: "partOfIndigenousGroup",
                },
              ].map(({ label, name }) => (
                <div className="form-check" key={name}>
                  <input
                    type="checkbox"
                    name={name}
                    className="form-check-input"
                    checked={formData[name]}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label">{label}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBack}
            >
              Back
            </button>
            <button type="submit" className="btn btn-success">
              Next Page
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicantProfile;
