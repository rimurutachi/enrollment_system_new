const ScheduleForm = require("../models/scheduleItems.js");

const Schedule = async (req, res) => {
  try {
    const { preferredDate, preferredTime } = req.body;
    if (!preferredDate || !preferredTime) {
      return res.status(400).json({ error: "Please fill up all fields!" });
    }

    const schedule = await ScheduleForm.create({
      preferredDate,
      preferredTime,
    });
    return res.status(201).json(schedule);
  } catch (error) {
    console.error("Error scheduling appointment:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { Schedule };
