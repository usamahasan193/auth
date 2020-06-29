const express = require("express");
const router = express.Router();
const Purchese = require("../models/Purchese");

router.post(
  "/",

  async (req, res) => {
    const purcheseId = req.body;
    try {
      await Purchese.findOneAndDelete({ id: purcheseId.id }, function (err) {
        if (err) console.log(err);
      });
      res.send(purcheseId);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
