import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import ProgressHeader from "./ProgressHeader.jsx";
import styles from "../../styles/RegistrationForm.module.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {
      applicantType: "",
      seniorHighTrack: "",
      preferredProgram: "",
      preferredCourse: "",
    }
  );

  // Save form data and authentication state to localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [formData, isAuthenticated]);

  // Handle Google Login Success
  const handleGoogleSuccess = (credentialResponse) => {
    if (credentialResponse && credentialResponse.credential) {
      const googleToken = credentialResponse.credential;

      // Store the token in localStorage to persist login state
      localStorage.setItem("googleToken", googleToken);

      // Set the authenticated state
      setIsAuthenticated(true);

      toast.success("Logged in with Google!");
    } else {
      console.error("Google login response does not include a credential.");
      toast.error("Google Login Failed");
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
    toast.error("Google Login Failed");
  };

  // Handle Logout
  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("googleToken");
    localStorage.removeItem("formData");

    // Reset authentication state
    setIsAuthenticated(false);

    // Optionally navigate the user to the login page
    navigate("/");

    toast.success("Successfully logged out!");
  };

  // Handle input changes for dropdowns
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Reset dependent fields if parent field changes
      ...(name === "applicantType" && {
        seniorHighTrack: "",
        preferredCourse: "",
      }),
      ...(name === "seniorHighTrack" && { preferredCourse: "" }),
    }));
  };

  const handleCancel = () => {
    setFormData({
      applicantType: "",
      seniorHighTrack: "",
      preferredProgram: "",
      preferredCourse: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleToken = localStorage.getItem("googleToken");
    if (!googleToken) {
      toast.error("Authentication token is missing. Please log in again.");
      return;
    }

    try {
      const response = await axios.post("/Register", {
        applicantType: formData.applicantType,
        seniorHighTrack: formData.seniorHighTrack,
        preferredProgram: formData.preferredProgram,
        preferredCourse: formData.preferredCourse,
        token: googleToken, // Send the token to the backend
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("First Phase submitted successfully!");
        setFormData({});
        goToNextPage();
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Submission failed! Please try again.");
    }
  };

  const goToNextPage = () => {
    setCurrentStep(1);
    navigate("/ApplicantProfile");
  };

  return (
    <div className={styles.container}>
      <ProgressHeader currentStep={currentStep} />

      {!isAuthenticated ? (
        <div className={styles.googleLogin}>
          <h2>Login with Google to Continue</h2>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </div>
      ) : (
        <>
          <nav className={styles.navbar}>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </nav>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Application Details</h2>

            {/* Applicant Type */}
            <div className={styles.field}>
              <label htmlFor="applicantType">Type of Applicant</label>
              <select
                name="applicantType"
                id="applicantType"
                value={formData.applicantType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Senior High School Graduate">
                  Senior High School Graduate
                </option>
                <option value="Transferee">Transferee</option>
              </select>
            </div>

            {/* Senior High School Graduate Fields */}
            {formData.applicantType === "Senior High School Graduate" && (
              <>
                {/* Senior High Track */}
                <div className={styles.field}>
                  <label htmlFor="seniorHighTrack">
                    Senior High School Track
                  </label>
                  <select
                    name="seniorHighTrack"
                    id="seniorHighTrack"
                    value={formData.seniorHighTrack}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="STEM">STEM</option>
                    <option value="ABM">ABM</option>
                    <option value="HUMSS">HUMSS</option>
                    <option value="TVL">TVL</option>
                  </select>
                </div>

                {/* Preferred Course */}
                {formData.seniorHighTrack && (
                  <div className={styles.field}>
                    <label htmlFor="preferredCourse">Preferred Course</label>
                    <select
                      name="preferredCourse"
                      id="preferredCourse"
                      value={formData.preferredCourse}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Computer Science - BSCS">
                        Computer Science - BSCS
                      </option>
                      <option value="Information Technology - IT">
                        Information Technology - IT
                      </option>
                    </select>
                  </div>
                )}
              </>
            )}

            {/* Transferee Fields */}
            {formData.applicantType === "Transferee" && (
              <div className={styles.field}>
                <label htmlFor="preferredProgram">Preferred Program</label>
                <select
                  name="preferredProgram"
                  id="preferredProgram"
                  value={formData.preferredProgram}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose your preferred program</option>
                  <option value="Computer Science - BSCS">
                    Computer Science - BSCS
                  </option>
                  <option value="Information Technology - BSIT">
                    Information Technology - BSIT
                  </option>
                </select>
              </div>
            )}

            {/* Buttons */}
            <div className={styles.buttons}>
              <button
                type="button"
                onClick={handleCancel}
                className={styles.cancelButton}
              >
                Reset
              </button>
              <button type="submit" className={styles.submitButton}>
                Next Page
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
