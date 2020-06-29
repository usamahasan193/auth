const mongoose = require("mongoose");
const purcheseSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  vendorName: {
    type: String,
    required: true,
  },
  catagoryName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  barCode: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
  },
  quantity: {
    type: String,
    required: true,
  },
  buyingPrice: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  maxSellingPrice: {
    type: String,
    required: true,
  },
  minSellingPrice: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
module.exports = Purchese = mongoose.model(
  "purchese",
  purcheseSchema,
  "Purchese"
);
