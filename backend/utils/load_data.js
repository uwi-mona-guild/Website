const { regular_data } = require("../mock_data/events");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const DB = process.env.DATABASE_URL;
const Event = require("../models/event"); // adjust path as needed
const mongoose = require("mongoose");

//TODO: set up command line args and link to functions for more models later

async function loadEvent() {
	await mongoose.connect(DB).then(() => {
		console.log("Connected to DB");
	});
	try {
		await Promise.all(
			regular_data.map(async (object) => {
				const event = new Event(object);
				await event.save();
			})
		);
		console.log("All test data saved successfully");
	} catch (err) {
		console.log("Error saving test data");
	} finally {
		await mongoose.disconnect().then(() => {
			console.log("Disconnected from DB");
		});
	}
}

loadEvent();
