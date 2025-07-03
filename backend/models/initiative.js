const mongoose = require('mongoose');

const initiativeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['Ongoing', 'Completed'], default: 'Ongoing' },
  startDate: { type: Date },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Initiative', initiativeSchema);
