const mongoose = require("mongoose");

const TimerAllData = mongoose.Schema({
  color: {
    type: String,
    required: false
  },
  start: {
    type: Number,
    required: false
  },
  end: {
    type: Number,
    required: false
  },
  inactive: {
    type: Boolean,
    required: false
  },
  showOnSalesReceiptHeader: {
    type: Boolean,
    required: false
  },
  showOnSaleCompleteScreen: {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model("TimerAllData", TimerAllData);
