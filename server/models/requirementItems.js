const mongoose = require("mongoose");
const { Schema } = mongoose;

// Requirements (5) Schema
const RequirementSchema = new Schema(
  {
    grade11_1st: {
      type: String, // Base64-encoded string or file path if using a file storage solution
      required: false,
    },
    grade11_2nd: {
      type: String, // Base64-encoded string or file path if using a file storage solution
      required: false,
    },
    grade12_1st: {
      type: String, // Base64-encoded string or file path if using a file storage solution
      required: false,
    },
    grade12_2nd: {
      type: String, // Base64-encoded string or file path if using a file storage solution
      required: false,
    },
    certificate_form_137: {
      type: String, // Base64-encoded string or file path if using a file storage solution
      required: false,
    },
  },
  { timestamps: true }
);

const RequirementModel = mongoose.model("Requirement", RequirementSchema);

module.exports = RequirementModel;
