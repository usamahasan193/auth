const express = require("express");
const router = express.Router();
const Brand = require("../models/Brand");

router.post(
  "/",

  async (req, res) => {
    const brandId = req.body;
    try {
      await Brand.findOneAndDelete({ id: brandId.id }, function (err) {
        if (err) console.log(err);
      });
      res.send(brandId);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
