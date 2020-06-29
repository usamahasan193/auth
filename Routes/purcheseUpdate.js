const express = require("express");
const router = express.Router();
const Purchese = require("../models/Purchese");

router.post(
  "/",

  async (req, res) => {
    let data = await req.body;

    try {
      const result = Purchese.updateMany(
        { id: data.id },
        { vendorName: data.vendorName },
        function (err) {
          if (err) console.log(err);
        }
      );
      res.send();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
