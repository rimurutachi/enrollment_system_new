const Announcement = require("../models/announcementItems.js");

exports.createAnnouncement = async (req, res) => {
  try {
    const { title, content, createdBy, recipient } = req.body; // Include recipient
    const announcement = new Announcement({
      title,
      content,
      createdBy,
      recipient,
    });
    await announcement.save();
    res
      .status(201)
      .json({ message: "Announcement created successfully", announcement });
  } catch (error) {
    res.status(500).json({ message: "Error creating announcement", error });
  }
};

exports.getAnnouncements = async (req, res) => {
  try {
    const { recipient } = req.query; // Get recipient from query params
    const filter = recipient ? { recipient: { $in: [recipient, "Both"] } } : {};
    const announcements = await Announcement.find(filter).sort({
      createdAt: -1,
    }); // Sort by recent
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: "Error fetching announcements", error });
  }
};
