const Faculty = require("../models/facultyItems.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const registerFaculty = async (req, res) => {
  try {
    const {
      facultyId,
      fullName,
      age,
      contactNumber,
      sections,
      subject,
      email,
      password,
    } = req.body;

    const existingFaculty = await Faculty.findOne({ email });
    if (existingFaculty)
      return res.status(400).json({ message: "Email already exists" });

    const faculty = new Faculty({
      facultyId,
      fullName,
      age,
      contactNumber,
      sections,
      subject,
      email,
      password,
    });
    await faculty.save();

    res.status(201).json({ message: "Faculty account created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const loginFaculty = async (req, res) => {
  try {
    const { email, password } = req.body;
    const faculty = await Faculty.findOne({ email });

    if (!faculty)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, faculty.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: faculty._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { registerFaculty, loginFaculty };
