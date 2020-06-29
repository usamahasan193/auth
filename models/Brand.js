const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  catagoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Brand = mongoose.model("brand", brandSchema, "Brand");
