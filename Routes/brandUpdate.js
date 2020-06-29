const express = require("express");
const router = express.Router();
const Brand = require("../models/Brand");

router.post(
  "/",

  async (req, res) => {
    let data = await req.body;

    try {
      const result = Brand.updateMany(
        { id: data.id },
        { name: data.name, cat_name: data.cat_name, color: data.color },
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
