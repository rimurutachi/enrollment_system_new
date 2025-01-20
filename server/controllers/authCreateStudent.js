const Student = require("../models/studentItems.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.createStudent = async (req, res) => {
  try {
    const {
      studentId,
      fullName,
      age,
      contactNumber,
      class: studentClass,
      section,
      password,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      studentId,
      fullName,
      age,
      contactNumber,
      class: studentClass,
      section,
      password: hashedPassword,
    });

    await newStudent.save();
    res
      .status(201)
      .json({ success: true, message: "Student created successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginStudent = async (req, res) => {
  try {
    const { studentID, password } = req.body;

    // Check if student exists
    const student = await Student.findOne({ studentId: studentID });
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found." });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials." });
    }

    // Generate a JWT token using the secret key from the .env file
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
