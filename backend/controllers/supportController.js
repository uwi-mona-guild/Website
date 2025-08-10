const Ticket = require("../models/supportTicket"); //adjust path as needed

// Support/Assistance Controller
const getAllSupportRequests = async (req, res) => {
	try {
		//res.json([{ id: 1, type: "complaint", message: "Example support request" }]); //placeholder for testing
		const tickets = await Ticket.find({}); //returns everything under the ticket schema in the DB
		res.status(200).json({ tickets });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const createSupportRequest = async (req, res) => {
	try {
		const ticket = await Ticket.create(req.body);
		if (ticket) {
			res.status(201).send("Support request created sucessfully")  
		}else{
			throw new Error("Failed to create support request");
		}	
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const getSupportRequest = async (req, res) => {
	try {
		const { id } = req.params;
		const ticket = await Ticket.findById(id);
		if (!ticket) {
			return res.status(404).send("Support request not found");
		}
		res.status(200).json({ ticket });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const updateSupportRequest = async (req, res) => {
	try {
		const { id } = req.params;
		const ticket = await Ticket.findByIdAndUpdate(id, req.body);
		if (!ticket) {
			return res.status(404).send("Support request not found");
		}
		const updated = await Ticket.findById(id);
		if (updated) {
			res.status(201).send("Support request updated sucessfully")  
		}else{
			throw new Error("Failed to create update request");
		}	
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const deleteSupportRequest = async (req, res) => {
	try {
		const { id } = req.params;
		const ticket = await Ticket.findByIdAndDelete(id, req.body);
		if (!ticket) {
			return res.status(404).send("Support request not found");
		}
		res.status(200).send("Delete sucessful");
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	getAllSupportRequests,
	createSupportRequest,
	getSupportRequest,
	updateSupportRequest,
	deleteSupportRequest,
};
