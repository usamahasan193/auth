const express = require("express");
const auth_middleware = require("../middleware/auth");
const router = express.Router();
const Cat = require("../models/Catagory");

router.post("/", async (req, res) => {
  const { id, name } = req.body;
  try {
    let cat = new Cat({
      id: id,
      name: name,
    });
    let cat_avail = await Cat.findOne({ name: cat.name });
    if (cat_avail) return res.status(400).send("Catagory is already exist");

    await cat.save();
    res.send(cat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
