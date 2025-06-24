const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const DB = process.env.DATABASE_URL;
const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json()); //for parsing json requests
app.use(bodyParser.urlencoded({ encoded: false })); //for parsing url encoded forms
mongoose.connect(DB).then(() => {
	console.log("Connected to DB");
});

app.all("/", (req, res) => {
	res.status(404).send("Unspecified endpoint");
});

//add routes here

//

app.listen(PORT, (err) => {
	if (err) {
		console.error(err);
	}
	console.log(`Server live on port ${PORT}`);
});
