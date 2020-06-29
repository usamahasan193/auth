const express = require("express");
const auth_middleware = require("../middleware/auth");
const router = express.Router();
const Vendor = require("../models/Vendor");

router.post("/", async (req, res) => {
  const { id, name, email, city } = req.body;
  try {
    let vendor = new Vendor({
      id: id,
      name: name,
      email: email,
      city: city,
    });
    let user = await Vendor.findOne({ email: vendor.email });
    if (user)
      return res.status(400).send("User of this email is already exist");

    await vendor.save();
    res.send(vendor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
