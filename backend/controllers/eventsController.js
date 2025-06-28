// filepath: backend/controllers/eventsController.js
const Event = require('../models/event'); // adjust path as needed

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
