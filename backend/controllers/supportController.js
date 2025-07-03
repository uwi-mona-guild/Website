const Support = require('../models/support');

// Support/Assistance Controller
exports.getAllSupportRequests = async (req, res) => {
  try {
    const requests = await Support.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new support request
exports.createSupportRequest = async (req, res) => {
  try {
    const request = new Support(req.body);
    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};