const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
	{
		status: {
			type: String,
			enum: ["pending", "approved", "rejected"], // <-- allowed values
			required: true,
		},
		title: {
			type: String,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, //automatically adds a createdAt and updatedAt key and manages updating them as necessay
	}
);

module.exports = mongoose.model("SupportTicket", supportSchema);
