import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressHeader from "./ProgressHeader";
import axios from "axios";

const FamilyProfile = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [siblings, setSiblings] = useState([{ fullName: "", age: "" }]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddSibling = () => {
    setSiblings([...siblings, { fullName: "", age: "" }]);
  };

  const handleRemoveSibling = (index) => {
    const updatedSiblings = siblings.filter((_, i) => i !== index);
    setSiblings(updatedSiblings);
  };

  const handleSiblingChange = (index, field, value) => {
    const updatedSiblings = [...siblings];
    updatedSiblings[index][field] = value;
    setSiblings(updatedSiblings);
  };

  // Example function to save family profile data
  const saveFamilyProfile = async (familyData) => {
    try {
      const response = await axios.post("/families", familyData);
      console.log("Family profile saved:", response.familyData);
    } catch (error) {
      console.error("Error saving family profile:", error);
    }
  };

  // Example function to fetch family profile data
  const fetchFamilyProfile = async () => {
    try {
      const response = await axios.get("/families");
      console.log("Family profiles:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching family profiles:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Gather all the family data from the form fields
    const familyData = {
      parent1Name: "",
      parent1Relationship: "",
      parent1Education: "",
      parent1Occupation: "",
      parent1Employer: "",
      parent1Income: "",
      parent1Contact: "",
      parent2Name: "",
      parent2Relationship: "",
      parent2Education: "",
      parent2Occupation: "",
      parent2Employer: "",
      parent2Income: "",
      parent2Contact: "",
      guardianName: "",
      guardianRelationship: "",
      guardianEducation: "",
      guardianOccupation: "",
      guardianEmployer: "",
      guardianIncome: "",
      guardianContact: "",
      siblings: siblings,
    };

    // Call the saveFamilyProfile function to send the data to the backend
    await saveFamilyProfile(familyData);
  };

  // Example of how to use fetchFamilyProfile (e.g., in a useEffect)
  useEffect(() => {
    const getFamilyData = async () => {
      const data = await fetchFamilyProfile();
      // Do something with the fetched data, e.g., pre-fill the form
    };

    getFamilyData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div
      className="containers"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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
          flex: 1,
          overflowY: "auto",
        }}
      >
        <h1 className="mb-4">
          <i className="bi bi-people-fill"></i> Family Background
        </h1>
        <hr className="divider" />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <h5>Parent 1</h5>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Relationship:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Highest Education:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Occupation:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Employer:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Monthly Income:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number:</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <h5>Parent 2</h5>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Relationship:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Highest Education:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Occupation:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Employer:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Monthly Income:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <hr className="divider" />

          <div className="row">
            <div className="col-md-6">
              <h4 className="mb-3">Guardian</h4>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Relationship:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Highest Education:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Occupation:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Employer:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Monthly Income:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number:</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <h4 className="mb-3">Siblings</h4>
              {siblings.map((sibling, index) => (
                <div className="d-flex align-items-center mb-3" key={index}>
                  <span className="me-2">{index + 1}</span>
                  <div className="me-2" style={{ flex: 1 }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      value={sibling.fullName}
                      onChange={(e) =>
                        handleSiblingChange(index, "fullName", e.target.value)
                      }
                    />
                  </div>
                  <div className="me-2" style={{ width: "100px" }}>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Age"
                      value={sibling.age}
                      onChange={(e) =>
                        handleSiblingChange(index, "age", e.target.value)
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-success me-2"
                    onClick={handleAddSibling}
                  >
                    +
                  </button>
                  {siblings.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleRemoveSibling(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <Link to="/ApplicantProfile">
              <button className="btn btn-success mt-4">Back Page</button>
            </Link>
            <Link to="/EducationalProfile">
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

export default FamilyProfile;
