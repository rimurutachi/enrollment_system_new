import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import "../styles/ApplicantProfile.module.css";
import axios from "axios";

const ApplicantProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    familyName: "",
    givenName: "",
    middleName: "",
    middleNameNotApplicable: false,
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
    disabilityNature: "",
    partOfIndigenousGroup: false,
    indigenousGroup: "",
    photo: null, // state to hold photo data
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState(1); // Set current step to 2 (Applicant Profile)

  // Handle image change for preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeInKB = file.size / 1024; // Convert size to KB

      if (fileSizeInKB > 200) {
        setErrorMessage(
          "File size exceeds 200 KB. Please upload a smaller image."
        );
        e.target.value = ""; // Clear the file input to allow the user to select another file
        return;
      }

      setErrorMessage(""); // Reset error message if file size is valid

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handlePreviewClick = () => {
    document.getElementById("fileInput").click();
  };

  // Handle navigation to the previous page
  const handleBack = () => {
    setCurrentStep(0);
    navigate("/RegistrationForm");
  };

  // Handle navigation to the next page
  const handleNext = () => {
    setCurrentStep(1);
    navigate("/FamilyProfile");
  };

  // Load form data from session storage on component mount
  useEffect(() => {
    const storedFormData = sessionStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  // Save form data to session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/applicants", formData);
      console.log("Applicant data saved:", response.data);
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error("Error saving applicant data:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  // To fetch the data:
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get("/applicants");
        console.log("Applicants:", response.data);
        // Update state with the fetched applicant data
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <div>
      {/* ProgressHeader displayed at the top */}
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      {/* Main Content */}
      <div
        className="card shadow p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form>
          <h1 className="mb-4 text-center">
            <i className="bi bi-person-fill"></i> Personal Information
          </h1>
          <div className="row mb-4">
            {/* Image Upload on the Left */}
            <div className="col-md-3 d-flex flex-column align-items-center">
              <div
                className="border rounded mb-2"
                onClick={handlePreviewClick}
                style={{
                  width: "150px",
                  height: "150px",
                  cursor: "pointer",
                  backgroundColor: "#f8f9fa",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span className="text-muted text-center">
                    Click to upload
                    <br />
                    2x2
                  </span>
                )}
              </div>
              <input
                id="fileInput"
                type="file"
                className="form-control d-none"
                accept="image/*"
                onChange={handleImageChange}
              />
              {/* Center the label */}
              <small className="text-muted text-center mt-2">
                Photo (200 KB max.)
              </small>
              {/* Display error message if the file size is too large */}
              {errorMessage && (
                <div className="text-danger text-center mt-2">
                  {errorMessage}
                </div>
              )}
            </div>

            {/* Personal Information and Address on the Right */}
            <div className="col-md-9">
              <h5>Personal Information</h5>
              {/* Personal Information */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Family Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.familyName}
                    onChange={(e) =>
                      setFormData({ ...formData, familyName: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.givenName}
                    onChange={(e) =>
                      setFormData({ ...formData, givenName: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Middle Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.middleName}
                    onChange={(e) =>
                      setFormData({ ...formData, middleName: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Suffix (Optional):</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.suffix}
                    onChange={(e) =>
                      setFormData({ ...formData, suffix: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Contact Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Religion:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.religion}
                    onChange={(e) =>
                      setFormData({ ...formData, religion: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Citizenship:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.nationality}
                    onChange={(e) =>
                      setFormData({ ...formData, nationality: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  {/* Gender */}
                  <label className="form-label">Gender at Birth:</label>
                  <select
                    className="form-select"
                    aria-label="Select gender"
                    value={formData.sex}
                    onChange={(e) =>
                      setFormData({ ...formData, sex: e.target.value })
                    }
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Age:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Civil Status:</label>
                  <select
                    className="form-select"
                    aria-label="Select gender"
                    value={formData.civilStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, civilStatus: e.target.value })
                    }
                  >
                    <option value="">Select Civil Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="widowed">Widowed</option>
                    <option value="divorced">Divorced</option>
                    <option value="separated">Separated</option>
                    <option value="annulled">Annulled</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.emailAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, emailAddress: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Address Section */}
              <hr className="mt-4" />
              <h5>Permanent Address</h5>

              <div className="row g-3 mt-3">
                <div className="col-md-4">
                  <label className="form-label">Unit Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.unitNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, unitNumber: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Street Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.streetName}
                    onChange={(e) =>
                      setFormData({ ...formData, streetName: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Subdivision/Barangay:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.subBarangay}
                    onChange={(e) =>
                      setFormData({ ...formData, subBarangay: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">City/Municipality:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.cityMunicipality}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cityMunicipality: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Province:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.province}
                    onChange={(e) =>
                      setFormData({ ...formData, province: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Zip Code:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.zipCode}
                    onChange={(e) =>
                      setFormData({ ...formData, zipCode: e.target.value })
                    }
                  />
                </div>
              </div>

              <hr className="mt-4" />
              <div className="row g-3 mt-3">
                <h5>Other Information:</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input check"
                      type="checkbox"
                      checked={formData.hasDisability}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hasDisability: e.target.checked,
                        })
                      }
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I have disability
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input check"
                      type="checkbox"
                      checked={formData.partOfIndigenousGroup}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          partOfIndigenousGroup: e.target.checked,
                        })
                      }
                      id="flexCheckDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I am part of an indigenous group
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons to navigate */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/RegistrationForm">
              <button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleBack}
              >
                Back Page
              </button>
            </Link>
            <Link to="/FamilyProfile">
              <button
                type="submit"
                className="btn btn-success mt-4"
                onClick={() => {
                  handleSubmit();
                  handleNext();
                }}
              >
                Next Page
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantProfile;
