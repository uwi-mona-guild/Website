const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {type: String},
});

module.exports = mongoose.model('Template', eventSchema);
