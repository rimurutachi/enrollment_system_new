// models/Faculty.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const FacultySchema = new Schema({
  facultyId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  contactNumber: { type: String, required: true },
  sections: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
FacultySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const FacultyModel = mongoose.model("Faculty", FacultySchema);

module.exports = FacultyModel;
