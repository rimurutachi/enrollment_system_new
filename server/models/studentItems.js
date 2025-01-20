const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  studentId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  contactNumber: { type: String, required: true },
  class: { type: String, required: true },
  section: { type: String, required: true },
  password: { type: String, required: true },
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
