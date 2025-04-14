
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);
