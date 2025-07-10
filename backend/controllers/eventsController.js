// filepath: backend/controllers/eventsController.js
const Event = require("../models/eventsModel"); // adjust path as needed

// Get all events
//accepts query params e.g. // GET /api/events?after=2024-07-01&before=2024-07-10
//params can be any Date() parseable string
//params are optional
const getAllEvents = async (req, res) => {
	const { after, before } = req.query;
	let afterDate = after ? new Date(after) : null;
	let beforeDate = before ? new Date(before) : null;

	// Date validation
	if ((after && isNaN(afterDate)) || (before && isNaN(beforeDate))) {
		return res.status(400).json({ error: "Invalid date format" });
	}

	try {
		const events = (await Event.find()).filter((event) => {
			const eventDate = new Date(event.date);
			//optional filtering for dates
			if (afterDate && eventDate < afterDate) return false;
			if (beforeDate && eventDate > beforeDate) return false;
			return true;
		});
		res.json(events.sort((a, b) => a.date - b.date)); // Sort by date in ascending order
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Create a new event / new events
const createEvent = async (req, res) => {
	try {
		if (Array.isArray(req.body)) { //if multiple
			const events = req.body
			await Promise.all(events.map((event) => new Event(event).save()));
			res.status(201).send("Events updated sucessfully");
		} else {
			const event = new Event(req.body);
			await event.save();
			res.status(201).send("Event updated sucessfully");
		}
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
			res.status(201).send("Event updated sucessfully");
		} else {
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
