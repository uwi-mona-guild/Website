const Document = require('../models/document');

// Get all documents
exports.getAllDocuments = async (req, res) => {
  try {
    const docs = await Document.find();
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new document
exports.createDocument = async (req, res) => {
  try {
    const doc = new Document(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};