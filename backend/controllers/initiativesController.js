const Initiative = require('../models/initiative');

// Get all initiatives
exports.getAllInitiatives = async (req, res) => {
  try {
    const initiatives = await Initiative.find();
    res.json(initiatives);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new initiative
exports.createInitiative = async (req, res) => {
  try {
    const initiative = new Initiative(req.body);
    await initiative.save();
    res.status(201).json(initiative);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};