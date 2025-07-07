// filepath: backend/controllers/eventsController.js
const Event = require('../models/eventsModel'); // adjust path as needed

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getEvent = async (req, res) => {
  
}


module.exports = {
  getAllEvents,
  createEvent,
  getEvent,
}