const mongoose = require("mongoose");

const TimerRange = mongoose.Schema({
  color: {
    type: String,
    required: true
  },
  start: {
    type: Number,
    required: true
  },
  end: {
    type: Number,
    required: true
  },
  inactive: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("TimerRange", TimerRange);
