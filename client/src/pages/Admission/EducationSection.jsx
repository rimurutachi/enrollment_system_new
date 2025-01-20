import React from "react";

const EducationSection = ({
  title,
  sectionData,
  onInputChange,
  includeStrand,
}) => {
  return (
    <section className="mb-4">
      <h5 className="text-uppercase">{title}</h5>
      <div className="row">
        <div className="col-md-3">
          <label className="form-label">School Last Attended:</label>
          <input
            type="text"
            className="form-control"
            value={sectionData.schoolName}
            onChange={(e) => onInputChange("schoolName", e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">School Address:</label>
          <input
            type="text"
            className="form-control"
            value={sectionData.schoolAddress}
            onChange={(e) => onInputChange("schoolAddress", e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Type of School:</label>
          <select
            className="form-select"
            value={sectionData.typeOfSchool}
            onChange={(e) => onInputChange("typeOfSchool", e.target.value)}
          >
            <option value="">Select:</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        {includeStrand && (
          <div className="col-md-3">
            <label className="form-label">Strand:</label>
            <select
              className="form-select"
              value={sectionData.strand}
              onChange={(e) => onInputChange("strand", e.target.value)}
            >
              <option value="">Select:</option>
              <option value="STEM">STEM</option>
              <option value="ABM">ABM</option>
              <option value="HUMSS">HUMSS</option>
              <option value="GAS">GAS</option>
            </select>
          </div>
        )}
        <div className="col-md-3">
          <label className="form-label">Year Graduated:</label>
          <input
            type="text"
            className="form-control"
            value={sectionData.yearGraduated}
            onChange={(e) => onInputChange("yearGraduated", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
