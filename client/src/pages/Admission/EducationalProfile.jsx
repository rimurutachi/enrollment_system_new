import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader"; // Import ProgressHeader
import axios from "axios";
import { toast } from "react-hot-toast";
import EducationSection from "../Admission/EducationSection.jsx";

const EducationalProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(3); // Assuming this is step 2 in the form

  const [formData, setFormData] = useState({
    elementary: {
      schoolName: "",
      schoolAddress: "",
      typeOfSchool: "",
      yearGraduated: "",
    },
    juniorHighSchool: {
      schoolName: "",
      schoolAddress: "",
      typeOfSchool: "",
      yearGraduated: "",
    },
    seniorHighSchool: {
      schoolName: "",
      schoolAddress: "",
      typeOfSchool: "",
      strand: "",
      yearGraduated: "",
    },
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Education`, formData);
      if (response.data.error) {
        toast.error("Error submitting data.");
      } else {
        toast.success("Education submitted successfully!");
        setFormData({
          elementary: {
            schoolName: "",
            schoolAddress: "",
            typeOfSchool: "",
            yearGraduated: "",
          },
          juniorHighSchool: {
            schoolName: "",
            schoolAddress: "",
            typeOfSchool: "",
            yearGraduated: "",
          },
          seniorHighSchool: {
            schoolName: "",
            schoolAddress: "",
            typeOfSchool: "",
            strand: "",
            yearGraduated: "",
          },
        });
        goToNextPage();
      }
    } catch (error) {
      console.error("Error submitting education data:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const goToNextPage = () => {
    setCurrentStep(3);
    navigate("/UploadRequirements");
  };

  return (
    <div
      className="containers"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <form onSubmit={handleSubmit}>
        <div
          className="card shadow p-4"
          style={{ borderRadius: "10px", backgroundColor: "#ffffff" }}
        >
          <h1 className="mb-4">
            <i className="bi bi-mortarboard-fill"></i> Educational Attainment
          </h1>
          <hr className="divider" />

          <EducationSection
            title="Elementary"
            sectionData={formData.elementary}
            onInputChange={(field, value) =>
              handleInputChange("elementary", field, value)
            }
          />
          <hr className="divider" />

          <EducationSection
            title="Junior High School"
            sectionData={formData.juniorHighSchool}
            onInputChange={(field, value) =>
              handleInputChange("juniorHighSchool", field, value)
            }
          />
          <hr className="divider" />

          <EducationSection
            title="Senior High School"
            sectionData={formData.seniorHighSchool}
            onInputChange={(field, value) =>
              handleInputChange("seniorHighSchool", field, value)
            }
            includeStrand
          />

          <div className="d-flex justify-content-between mt-4">
            <Link to="/FamilyProfile">
              <button type="button" className="btn btn-secondary">
                Back Page
              </button>
            </Link>
            <button type="submit" className="btn btn-success mt-4">
              Next Page
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationalProfile;
