const RegisterForm = require("../models/registerItems.js");
const { OAuth2Client } = require("google-auth-library");

// Replace with your Google OAuth Client ID
const CLIENT_ID =
  "1065775308968-okj81u2ghvucf4lsfrjuj253htq2ko9s.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

const Register = async (req, res) => {
  try {
    // Extract token from Authorization header or request body
    const token = req.body.token || req.headers.authorization?.split(" ")[1];

    // Validate Google Token
    if (!token) {
      return res
        .status(401)
        .json({ error: "Authentication token is required." });
    }

    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      console.log("Google Token Verified. User Info:", payload);
    } catch (err) {
      console.error("Error verifying Google token:", err);
      return res.status(401).json({ error: "Invalid or expired token." });
    }

    // Extract other fields from the request body
    const {
      applicantType,
      seniorHighTrack,
      preferredProgram,
      preferredCourse,
    } = req.body;

    // Validate required fields
    if (!applicantType) {
      return res.status(400).json({ error: "Applicant type is required." });
    }

    // Create new registration record
    const newRegister = await RegisterForm.create({
      applicantType,
      seniorHighTrack,
      preferredProgram,
      preferredCourse,
    });

    return res.status(201).json(newRegister);
  } catch (error) {
    console.error("Error in registerApplicant:", error);
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
};

module.exports = { Register };
