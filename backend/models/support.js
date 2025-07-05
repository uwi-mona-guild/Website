const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., 'complaint', 'assistance'
  message: { type: String, required: true },
  studentId: { type: String },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Support', supportSchema);
