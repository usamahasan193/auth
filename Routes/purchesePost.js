const express = require("express");
const auth_middleware = require("../middleware/auth");

const router = express.Router();
const Purchese = require("../models/Purchese");

router.post("/", async (req, res) => {
  const {
    id,
    vendorName,
    catagoryName,
    brandName,
    barCode,
    colorCode,
    quantity,
    buyingPrice,
    maxSellingPrice,
    minSellingPrice,
    description,
    paymentType,
    paymentStatus,
    date,
  } = req.body;
  try {
    let purchese = new Purchese({
      id: id,
      vendorName: vendorName,
      catagoryName: catagoryName,
      brandName: brandName,
      barCode: barCode,
      colorCode: colorCode,
      quantity: quantity,
      buyingPrice: buyingPrice,
      minSellingPrice: minSellingPrice,
      maxSellingPrice: maxSellingPrice,
      paymentType: paymentType,
      paymentStatus: paymentStatus,
      description: description,
      date: date,
    });
    let purcheseId = await Purchese.findOne({ id: purchese.id });
    if (purcheseId)
      return res
        .status(400)
        .send("Choose diffrent one this ID already present");

    await purchese.save();
    res.send(purchese);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
