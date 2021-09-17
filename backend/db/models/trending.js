const mongoose = require("mongoose");

const trendSchema = mongoose.Schema({
  post:{type:mongoose.Schema.Types.ObjectId,ref:"Post"},
  likesCounter: {type: Number}
});

module.exports = mongoose.model("Trend", trendSchema);
