const mongoose = require("mongoose");
const { Schema } = mongoose;

// Family Profile (3) Schema
const FamilySchema = new Schema(
  {
    parent1: {
      name: { type: String, required: true },
      education: { type: String, default: "" },
      occupation: { type: String, default: "" },
      employer: { type: String, default: "" },
      income: { type: Number, default: 0 },
      contact: { type: String, default: "" },
    },
    parent2: {
      name: { type: String, required: true },
      education: { type: String, default: "" },
      occupation: { type: String, default: "" },
      employer: { type: String, default: "" },
      income: { type: Number, default: 0 },
      contact: { type: String, default: "" },
    },
    guardian: {
      name: { type: String, required: true },
      relationship: { type: String, default: "" },
      education: { type: String, default: "" },
      occupation: { type: String, default: "" },
      employer: { type: String, default: "" },
      income: { type: Number, default: 0 },
      contact: { type: String, default: "" },
    },
    siblings: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

const FamilyModel = mongoose.model("Family", FamilySchema);

module.exports = FamilyModel;
