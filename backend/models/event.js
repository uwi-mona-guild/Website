const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
  image: { type: String }, // URL or path to the event image
  price: {
    amount: { type: Number }, // Optional, event can be free if not set
    currency: { type: String, enum: ['JMD', 'USD'], default: 'JMD' } // Optional, defaults to JMD
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
