const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schedule Appointment (6) Schema
const ScheduleSchema = new Schema(
  {
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
  },
  { timestamps: true }
);

const ScheduleModel = mongoose.model("Schedule", ScheduleSchema);

module.exports = ScheduleModel;
