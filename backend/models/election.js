const mongoose = require("mongoose");

const electionSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		status: { type: String, enum: ["Upcoming", "Ongoing", "Completed"], default: "Upcoming" },
		startDate: { type: Date },
		endDate: { type: Date },
		candidates: [{ name: String, position: String }],
	},
	{
		timestamps: true, //mongoose manually manages createdAt and updatedAt with this flag
	}
);

module.exports = mongoose.model("Election", electionSchema);
