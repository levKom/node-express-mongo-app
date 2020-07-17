const mongoose = require("mongoose");

const TimerGeneral = mongoose.Schema({
  showOnSalesReceiptHeader: {
    type: Boolean,
    required: true
  },
  showOnSaleCompleteScreen: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("TimerGeneral", TimerGeneral);
