const Representative = require('../models/representative');

// Representatives (Guild) Controller
exports.getAllRepresentatives = async (req, res) => {
  try {
    const reps = await Representative.find();
    res.json(reps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new representative
exports.createRepresentative = async (req, res) => {
  try {
    const rep = new Representative(req.body);
    await rep.save();
    res.status(201).json(rep);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};