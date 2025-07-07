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
	try {
		const { id } = req.params;
		const event = await Event.findById(id);
		if (!event) {
			return res.status(404).send("Event not found");
		}
		res.status(200).json({ event });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const updateEvent = async (req, res) => {
	try {
		const { id } = req.params;
		const event = await Event.findByIdAndUpdate(id, req.body);
		if (!event) {
			return res.status(404).send("Event not found");
		}
		const updated = await Event.findById(id);
		if (updated) {
			res.status(201).send("Event updated sucessfully")  
		}else{
			throw new Error("Failed to create update event");
		}	
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const deleteEvent = async (req, res) => {
	try {
		const { id } = req.params;
		const event = await Event.findByIdAndDelete(id, req.body);
		if (!event) {
			return res.status(404).send("Event not found");
		}
		res.status(200).send("Delete sucessful");
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	getAllEvents,
	createEvent,
	getEvent,
	updateEvent,
	deleteEvent,
};
