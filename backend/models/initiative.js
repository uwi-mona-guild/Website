const mongoose = require("mongoose");

const initiativeSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String },
		status: { type: String, enum: ["Ongoing", "Completed"], default: "Ongoing" },
		startDate: { type: Date },
		endDate: { type: Date },
	},
	{
		timestamps: true, //mongoose manually manages createdAt and updatedAt with this flag
	}
);

module.exports = mongoose.model("Initiative", initiativeSchema);
