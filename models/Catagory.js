const mongoose = require("mongoose");
const catSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Catagory = mongoose.model("catagory", catSchema, "Catagory");
