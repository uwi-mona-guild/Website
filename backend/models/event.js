const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: {type: Date},
  location: { type: String, required: true, default: "TBA" },
  description: { type: String },
  price: {
    amount: { type: Number }, // Optional, event can be free if not set
    currency: { type: String, enum: ['JMD', 'USD'], default: 'JMD' } // Optional, defaults to JMD
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
