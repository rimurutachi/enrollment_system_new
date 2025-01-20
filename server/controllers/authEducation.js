const EducationForm = require("../models/educationItems.js");

const Education = async (req, res) => {
  try {
    const { elementary, juniorHighSchool, seniorHighSchool } = req.body;
    if (!elementary || !juniorHighSchool || !seniorHighSchool) {
      return res.status(400).json({ error: "Please fill up all fields!" });
    }

    const newEducation = await EducationForm.create({
      elementary,
      juniorHighSchool,
      seniorHighSchool,
    });
    return res.status(201).json(newEducation);
  } catch (error) {
    console.error("Error saving education:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { Education };
