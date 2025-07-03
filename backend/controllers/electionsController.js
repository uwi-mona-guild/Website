const Election = require('../models/election');

// Elections Controller
exports.getAllElections = async (req, res) => {
  try {
    const elections = await Election.find();
    res.json(elections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new election
exports.createElection = async (req, res) => {
  try {
    const election = new Election(req.body);
    await election.save();
    res.status(201).json(election);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};