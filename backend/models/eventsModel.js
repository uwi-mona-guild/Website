const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start_date: { type: Date, required: true }, // Will include date and time (if a time is given)
  end_date: {type: Date },
  location: { type: String, required: true, default: "TBA" },
  description: { type: String },
  imageUrl: { type: String },
  price: {
    amount: { type: Number, default: 0 }, // Optional, event can be free if not set
    currency: { type: String, enum: ['JMD', 'USD'], default: 'JMD' } // Optional, defaults to JMD
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
