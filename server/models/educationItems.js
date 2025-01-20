const mongoose = require("mongoose");
const { Schema } = mongoose;

// Educational Profile (4) Schema
const EducationSchema = new Schema(
  {
    elementary: {
      schoolName: String,
      schoolAddress: String,
      typeOfSchool: String,
      yearGraduated: String,
    },
    juniorHighSchool: {
      schoolName: String,
      schoolAddress: String,
      typeOfSchool: String,
      yearGraduated: String,
    },
    seniorHighSchool: {
      schoolName: String,
      schoolAddress: String,
      typeOfSchool: String,
      strand: String,
      yearGraduated: String,
    },
  },
  { timestamps: true }
);

const EducationModel = mongoose.model("Education", EducationSchema);

module.exports = EducationModel;
