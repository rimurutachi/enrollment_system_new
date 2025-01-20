const FamilyForm = require("../models/familyItems.js");

const Family = async (req, res) => {
  try {
    const { parent1, parent2, guardian, siblings } = req.body;

    // Input validation
    if (!parent1.name || !parent2.name || !guardian.name) {
      return res.status(400).json({ error: "All names are required." });
    }

    if (isNaN(Number(siblings)) || Number(siblings) < 0) {
      return res.status(400).json({ error: "Invalid number of siblings." });
    }

    const newFamily = await FamilyForm.create({
      parent1,
      parent2,
      guardian,
      siblings,
    });
    return res.status(201).json(newFamily);
  } catch (error) {
    console.error("Error saving family information:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { Family };
