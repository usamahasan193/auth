const express = require("express");
const router = express.Router();
const Cat = require("../models/Catagory");

router.post(
  "/",

  async (req, res) => {
    const catId = req.body;
    try {
      await Cat.findOneAndDelete({ id: catId.id }, function (err) {
        if (err) console.log(err);
      });
      res.send(catId);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
