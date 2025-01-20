// Initialize mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// RegistrationForm.jsx (1) Model Schema
const RegisterSchema = new Schema(
  {
    applicantType: { type: String, required: true },
    seniorHighTrack: { type: String },
    preferredProgram: { type: String },
    preferredCourse: { type: String },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

const RegisterModel = mongoose.model("Register", RegisterSchema);

module.exports = RegisterModel;
