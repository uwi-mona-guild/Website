const { regular_data } = require("../mock_data/representativesMockData");
const DB = process.env.DATABASE_URL;
const Representative = require("../models/representativesModel"); // adjust path as needed
const mongoose = require("mongoose");

//TODO: set up command line args and link to functions for more models later

async function loadRepresentative() {
	await mongoose.connect(DB).then(() => {
		console.log("Connected to DB");
	});
	try {
		await Promise.all(
			regular_data.map(async (object) => {
				const representative = new Representative(object);
				await representative.save();
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

loadRepresentative();
