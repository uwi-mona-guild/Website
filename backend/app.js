const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');
const DB = process.env.DATABASE_URL;
const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json()); //for parsing json requests
app.use(bodyParser.urlencoded({ encoded: false })); //for parsing url encoded forms
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(DB).then(() => {
	console.log("Connected to DB");
});

// Import the routes here
const eventsRoutes = require('./routes/events');
const supportRoutes = require('./routes/support');
const documentsRoutes = require('./routes/documents');
const representativesRoutes = require('./routes/representatives');
const initiativesRoutes = require('./routes/initiatives');
const electionsRoutes = require('./routes/elections');

// Use the routes here
app.use('/api/events', eventsRoutes); // Register the events routes
app.use('/api/support', supportRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/representatives', representativesRoutes);
app.use('/api/initiatives', initiativesRoutes);
app.use('/api/elections', electionsRoutes);

// Fallback route for unspecified endpoints
app.all("/", (req, res) => {
	res.status(404).send("Unspecified endpoint");
});

// Error handling middleware
app.listen(PORT, (err) => {
	if (err) {
		console.error(err);
	}
	console.log(`Server live on port ${PORT}`);
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!!' });
});
