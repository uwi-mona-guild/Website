const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		url: { type: String, required: true },
		description: { type: String },
	},
	{
		timestamps: true, //mongoose manually manages createdAt and updatedAt with this flag
	}
);

module.exports = mongoose.model("Document", documentSchema);
