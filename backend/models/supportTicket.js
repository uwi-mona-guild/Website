const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
	{
		status: {
			type: String,
			enum: {
				values: ["open", "pending", "resolved", "rejected"],
				message: "Invalid ticket status",
			}, // <-- allowed values
			default: "open",
		},
		priority: {
			type: String,
			enum: {
				values: ["low", "medium", "high", "urgent"],
				message: "Invalid ticket priority provided",
			}, 
			default: "low",
		},
		title: {
			type: String,
		},
		message: {
			type: String,
			required: [true, "Invalid empty ticket provided"],
		},
	},
	{
		timestamps: true, //automatically adds a createdAt and updatedAt key and manages updating them as necessay
	}
);

module.exports = mongoose.model("Ticket", supportSchema);
