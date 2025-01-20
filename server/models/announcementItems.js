const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnnouncementSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    recipient: {
      type: String,
      enum: ["Students", "Faculty", "Both"],
      required: true,
    }, // Specifies the target audience
    createdBy: { type: String, required: true }, // Tracks who created the announcement
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const AnnouncementModel = mongoose.model("Announcement", AnnouncementSchema);

module.exports = AnnouncementModel;
