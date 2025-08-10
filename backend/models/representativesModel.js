const mongoose = require('mongoose');

const representativeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  year: {type: Number, required: true},
  description: { type: String },
  photoUrl: { type: String },
  socials: [{ type: String }], 
  major: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Representative', representativeSchema);
