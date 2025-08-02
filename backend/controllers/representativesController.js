// Representatives (Guild) Controller
// filepath: backend/controllers/representativesController.js
const Representative = require('../models/representativesModel');

//accepts query params e.g. // GET /api/representatives?after=2023&before=2025
//params can be any Date() parseable string
//params are optional
const getAllRepresentatives = async (req, res) => {
  const { after, before } = req.query;
  let afterYear = after ? parseInt(after, 10) : null;
  let beforeYear = before ? parseInt(before, 10) : null;

  // Year validation
  if ((after && isNaN(afterYear)) || (before && isNaN(beforeYear))) {
    return res.status(400).json({ error: "Invalid year parameter" });
  }

  try {
    // Build query object for mongoose based on year filtering
    const query = {};
    if (afterYear !== null || beforeYear !== null) {
      query.year = {};
      if (afterYear !== null) query.year.$gt = afterYear; //mongoose query for greater than afterYear
      if (beforeYear !== null) query.year.$lt = beforeYear; //mongoose query for less than afterYear
    }

    const representatives = await Representative.find(query).sort({ year: 1 });
    res.status(200).json(representatives);
  } catch (err) {
    console.error("Error fetching representatives:", err);
    res.status(500).json({ error: "Failed to fetch representatives" });
  }
};

// Create a new representative / new representatives
const createRepresentative = async (req, res) => {
	try {
		if (Array.isArray(req.body)) { //if multiple
			const representatives = req.body
			await Promise.all(representatives.map((representative) => new Representative(representative).save()));
			res.status(201).send("Representatives added sucessfully");
		} else {
			const representative = new Representative(req.body);
			await representative.save();
			res.status(201).send("Representative added sucessfully");
		}
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const getRepresentative = async (req, res) => {
	try {
		const { id } = req.params;
		const representative = await Representative.findById(id);
		if (!representative) {
			return res.status(404).send("Representative not found");
		}
		res.status(200).json({ representative });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const updateRepresentative = async (req, res) => {
	try {
		const { id } = req.params;
		const representative = await Representative.findByIdAndUpdate(id, req.body);
		if (!representative) {
			return res.status(404).send("Representative not found");
		}
		const updated = await Representative.findById(id);
		if (updated) {
			res.status(201).send("Representative updated sucessfully");
		} else {
			throw new Error("Failed to create update representative");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const deleteRepresentative = async (req, res) => {
	try {
		const { id } = req.params;
		const representative = await Representative.findByIdAndDelete(id, req.body);
		if (!representative) {
			return res.status(404).send("Representative not found");
		}
		res.status(200).send("Delete sucessful");
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
  getAllRepresentatives,
  createRepresentative,
}

