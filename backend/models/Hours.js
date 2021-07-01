const mongoose = require("mongoose");

module.exports = mongoose.model("hours", {
  user: String,
  month: Number,
  year: Number,
  days: [],
});
