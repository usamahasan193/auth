const express = require("express");
const auth_middleware = require("../middleware/auth");
const router = express.Router();
const Brand = require("../models/Brand");

router.post("/", async (req, res) => {
  const { id, cat_name, name, color } = req.body;
  try {
    let brand = new Brand({
      id: id,
      cat_name: cat_name,
      name: name,
      color: color,
    });
    let id_avail = await Brand.findOne({ id: brand.id });
    if (id_avail)
      return res.status(400).send("Choose an other ID, this one already exist");

    await brand.save();
    res.send(brand);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
