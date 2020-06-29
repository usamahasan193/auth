const express = require("express");
const router = express.Router();
const Purchese = require("../models/Purchese");

router.get("/", async (req, res) => {
  try {
    const data = await Purchese.find();
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});
module.exports = router;
