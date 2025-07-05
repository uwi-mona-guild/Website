const mongoose = require("mongoose");

const representativeSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		role: { type: String, required: true },
		email: { type: String },
		phone: { type: String },
		photoUrl: { type: String },
	},
	{
		timestamps: true, //mongoose manually manages createdAt and updatedAt with this flag
	}
);

module.exports = mongoose.model("Representative", representativeSchema);
