const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test } = require("../controllers/authController");
const { Register } = require("../controllers/authRegister.js");
const { Applicant } = require("../controllers/authApplicant.js");
const { Family } = require("../controllers/authFamily.js");
const { Education } = require("../controllers/authEducation.js");
const { Requirement, upload } = require("../controllers/authRequirement.js");
const { Schedule } = require("../controllers/authSchedule.js");
const {
  createAnnouncement,
  getAnnouncements,
} = require("../controllers/authAnnouncement.js");
const {
  createStudent,
  loginStudent,
} = require("../controllers/authCreateStudent.js");
const {
  registerFaculty,
  loginFaculty,
} = require("../controllers/authCreateFaculty.js");

//Middleware
router.use(
  cors({
    origin: "https://enrollment-system-client.vercel.app",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
    credentials: true,
  })
);

router.get("/", test);
router.post("/Register", Register);
router.post("/Applicant", Applicant);
router.get("/Family/siblings");
router.post("/Family", Family);
router.post("/Education", Education);
router.post(
  "/Requirement",
  upload.fields([
    { name: "grade11_1st" },
    { name: "grade11_2nd" },
    { name: "grade12_1st" },
    { name: "grade12_2nd" },
    { name: "certificate_form_137" },
  ]),
  Requirement
);
router.post("/Schedule", Schedule);
router.post("/Create", createAnnouncement);
router.get("/Announcement", getAnnouncements);
router.post("/Student", createStudent); // Create student
router.post("/Login", loginStudent); // Student login
router.post("/Faculty", registerFaculty);
router.post("/FacultyLogin", loginFaculty);

module.exports = router;
