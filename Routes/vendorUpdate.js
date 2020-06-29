const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor");

router.post(
  "/",

  async (req, res) => {
    let data = await req.body;

    try {
      const result = Vendor.updateMany(
        { id: data.id },
        { name: data.name, email: data.email, city: data.city },
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
