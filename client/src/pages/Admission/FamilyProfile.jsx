import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import axios from "axios";
import { toast } from "react-hot-toast";

const FormGroup = ({
  label,
  type = "text",
  value = "",
  onChange = () => {},
  options,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {options ? (
        <select
          className="form-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select:</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="form-control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

const Section = ({ title, fields }) => (
  <div className="col-md-6">
    <h5>{title}</h5>
    {fields.map((field, index) => (
      <FormGroup key={index} {...field} />
    ))}
  </div>
);

const FamilyProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);

  const [formData, setFormData] = useState({
    parent1: {
      name: "",
      education: "",
      occupation: "",
      employer: "",
      income: "",
      contact: "",
    },
    parent2: {
      name: "",
      education: "",
      occupation: "",
      employer: "",
      income: "",
      contact: "",
    },
    guardian: {
      name: "",
      relationship: "",
      education: "",
      occupation: "",
      employer: "",
      income: "",
      contact: "",
    },
    siblings: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateField = (section, field, value) => {
    if (section === "siblings") {
      // Handle siblings separately as it's not an object
      setFormData((prev) => ({
        ...prev,
        siblings: value,
      }));
    } else {
      // Handle other sections normally
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/Family", formData);
      if (data.error) {
        toast.error("Error: " + data.error);
      } else {
        toast.success("Family information submitted successfully!");
        setFormData({ parent1: {}, parent2: {}, guardian: {}, siblings: "" });
        goToNextPage();
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed.");
    }
  };

  const goToNextPage = () => {
    setCurrentStep(2);
    navigate("/EducationalProfile");
  };

  return (
    <div className="containers" style={{ minHeight: "100vh" }}>
      <ProgressHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <form onSubmit={handleSubmit}>
        <div className="card shadow p-4" style={{ borderRadius: "10px" }}>
          <h1 className="mb-4">
            <i className="bi bi-people-fill"></i> Family Background
          </h1>
          <hr />
          <div className="row">
            <Section
              title="Mother's Information"
              fields={[
                {
                  label: "Name",
                  value: formData.parent1.name,
                  onChange: (val) => updateField("parent1", "name", val),
                },
                {
                  label: "Educational Attainment",
                  value: formData.parent1.education,
                  onChange: (val) => updateField("parent1", "education", val),
                  options: [
                    "Elementary",
                    "High School",
                    "Undergraduate",
                    "Post-Graduate",
                  ],
                },
                {
                  label: "Occupation",
                  value: formData.parent1.occupation,
                  onChange: (val) => updateField("parent1", "occupation", val),
                },
                {
                  label: "Employer (If none, type N/A.)",
                  value: formData.parent1.employer,
                  onChange: (val) => updateField("parent1", "employer", val),
                },
                {
                  label: "Monthly Income",
                  value: formData.parent1.income,
                  onChange: (val) => updateField("parent1", "income", val),
                  type: "number",
                },
                {
                  label: "Contact Number",
                  value: formData.parent1.contact,
                  onChange: (val) => updateField("parent1", "contact", val),
                },
              ]}
            />
            <Section
              title="Father's Information"
              fields={[
                {
                  label: "Name",
                  value: formData.parent2.name,
                  onChange: (val) => updateField("parent2", "name", val),
                },
                {
                  label: "Educational Attainment",
                  value: formData.parent2.education,
                  onChange: (val) => updateField("parent2", "education", val),
                  options: [
                    "Elementary",
                    "High School",
                    "Undergraduate",
                    "Post-Graduate",
                  ],
                },
                {
                  label: "Occupation",
                  value: formData.parent2.occupation,
                  onChange: (val) => updateField("parent2", "occupation", val),
                },
                {
                  label: "Employer (If none, type N/A.)",
                  value: formData.parent2.employer,
                  onChange: (val) => updateField("parent2", "employer", val),
                },
                {
                  label: "Monthly Income",
                  value: formData.parent2.income,
                  onChange: (val) => updateField("parent2", "income", val),
                  type: "number",
                },
                {
                  label: "Contact Number",
                  value: formData.parent2.contact,
                  onChange: (val) => updateField("parent2", "contact", val),
                },
              ]}
            />
          </div>
          <hr />
          <div className="row">
            <Section
              title="Guardian Information"
              fields={[
                {
                  label: "Name",
                  value: formData.guardian.name,
                  onChange: (val) => updateField("guardian", "name", val),
                },
                {
                  label: "Relationship",
                  value: formData.guardian.relationship,
                  onChange: (val) =>
                    updateField("guardian", "relationship", val),
                },
                {
                  label: "Educational Attainment",
                  value: formData.guardian.education,
                  onChange: (val) => updateField("guardian", "education", val),
                  options: [
                    "Elementary",
                    "High School",
                    "Undergraduate",
                    "Post-Graduate",
                  ],
                },
                {
                  label: "Occupation",
                  value: formData.guardian.occupation,
                  onChange: (val) => updateField("guardian", "occupation", val),
                },
                {
                  label: "Employer (If none, type N/A.)",
                  value: formData.guardian.employer,
                  onChange: (val) => updateField("guardian", "employer", val),
                },
                {
                  label: "Monthly Income",
                  value: formData.guardian.income,
                  onChange: (val) => updateField("guardian", "income", val),
                  type: "number",
                },
                {
                  label: "Contact Number",
                  value: formData.guardian.contact,
                  onChange: (val) => updateField("guardian", "contact", val),
                },
              ]}
            />
            <Section
              title="Siblings"
              fields={[
                {
                  label: "Number of Siblings",
                  value: formData.siblings,
                  onChange: (val) => updateField("siblings", null, val), // No field needed here
                  type: "number", // Ensure this is numeric input
                },
              ]}
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/ApplicantProfile">
              <button type="button" className="btn btn-secondary">
                Back Page
              </button>
            </Link>
            <button type="submit" className="btn btn-success">
              Next Page
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FamilyProfile;
