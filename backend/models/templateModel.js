const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: {type: String},
});

module.exports = mongoose.model('Template', templateSchema);
