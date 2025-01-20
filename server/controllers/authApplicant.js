const ApplicantForm = require("../models/applicantItems.js");

const Applicant = async (req, res) => {
  try {
    const {
      familyName,
      givenName,
      middleName,
      suffix,
      dateOfBirth,
      contactNumber,
      religion,
      nationality,
      sex,
      age,
      civilStatus,
      emailAddress,
      unitNumber,
      streetName,
      subBarangay,
      cityMunicipality,
      province,
      zipCode,
      hasDisability,
      partOfIndigenousGroup,
      photo,
    } = req.body;

    if (
      !familyName ||
      !givenName ||
      !middleName ||
      !dateOfBirth ||
      !contactNumber ||
      !religion ||
      !nationality ||
      !sex ||
      !age ||
      !civilStatus ||
      !emailAddress ||
      !unitNumber ||
      !streetName ||
      !subBarangay ||
      !cityMunicipality ||
      !province ||
      !zipCode
    ) {
      return res.json({ error: "Please fill up all fields!" });
    }

    // Check if photo exists and is a valid Base64 string
    let photoData = null;
    if (photo) {
      const isValidBase64 = (str) => {
        try {
          return Buffer.from(str, "base64").toString("base64") === str;
        } catch (error) {
          return false;
        }
      };

      if (!isValidBase64(photo.split(",")[1])) {
        return res.status(400).json({
          error: "Invalid photo format. Please upload a valid image.",
        });
      }

      photoData = photo; // Save Base64 string if valid
    }

    // Create applicant
    const newApplicant = await ApplicantForm.create({
      familyName,
      givenName,
      middleName,
      suffix,
      dateOfBirth,
      contactNumber,
      religion,
      nationality,
      sex,
      age,
      civilStatus,
      emailAddress,
      unitNumber,
      streetName,
      subBarangay,
      cityMunicipality,
      province,
      zipCode,
      hasDisability,
      partOfIndigenousGroup,
      photo: photoData, // Save the Base64 photo in the database
    });

    res.status(201).json(newApplicant);
  } catch (error) {
    console.error("Error creating applicant:", error);
    res
      .status(500)
      .json({ error: "Internal server error. Please try again later." });
  }
};

module.exports = { Applicant };
