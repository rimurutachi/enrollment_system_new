const multer = require('multer')
const RequirementForm = require("../models/requirementItems.js");

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

// Controller for handling requirements
const Requirement = async (req, res) => {
  try {
    const {
      grade11_1st,
      grade11_2nd,
      grade12_1st,
      grade12_2nd,
      certificate_form_137,
    } = req.files; // Access uploaded files from req.files

    // Check if all required files are uploaded
    if (
      !grade11_1st ||
      !grade11_2nd ||
      !grade12_1st ||
      !grade12_2nd ||
      !certificate_form_137
    ) {
      return res.status(400).json({ error: "Please upload all required files!" });
    }

    // Save file data to the database
    const newRequirement = await RequirementForm.create({
      grade11_1st: grade11_1st[0].buffer.toString("base64"),
      grade11_2nd: grade11_2nd[0].buffer.toString("base64"),
      grade12_1st: grade12_1st[0].buffer.toString("base64"),
      grade12_2nd: grade12_2nd[0].buffer.toString("base64"),
      certificate_form_137: certificate_form_137[0].buffer.toString("base64"),
    });

    return res.status(201).json({ message: "Files uploaded successfully!", data: newRequirement });
  } catch (error) {
    console.error("Error processing files:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

  module.exports = { Requirement, upload }