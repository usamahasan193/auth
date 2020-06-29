const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor");

router.post(
  "/",

  async (req, res) => {
    const vendorId = req.body;
    try {
      await Vendor.findOneAndDelete({ id: vendorId.id }, function (err) {
        if (err) console.log(err);
      });
      res.send(vendorId);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
