const mongoose = require("mongoose");
const { Schema } = mongoose;

// Applicant (2) Schema
const ApplicantSchema = new Schema(
  {
    familyName: { type: String, required: true },
    givenName: { type: String, required: true },
    middleName: { type: String, required: true },
    suffix: String,
    dateOfBirth: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    religion: { type: String, required: true },
    nationality: { type: String, required: true },
    sex: { type: String, required: true },
    age: { type: Number, required: true },
    civilStatus: { type: String, required: true },
    emailAddress: { type: String, required: true },
    unitNumber: { type: String, required: true },
    streetName: { type: String, required: true },
    subBarangay: { type: String, required: true },
    cityMunicipality: { type: String, required: true },
    province: { type: String, required: true },
    zipCode: { type: String, required: true },
    hasDisability: { type: Boolean, default: false },
    partOfIndigenousGroup: { type: Boolean, default: false },
    photo: { type: String, required: true }, // Store as base64 or URL
  },
  { timestamps: true }
);

const ApplicantModel = mongoose.model("Applicant", ApplicantSchema);

module.exports = ApplicantModel;
