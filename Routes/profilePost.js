const express = require("express");
const auth_middleware = require("../middleware/auth");
const router = express.Router();
const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

router.post("/", auth_middleware, async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let profile = new Profile({
      name: name,
      email: email,
      password: password,
    });
    let user = await Profile.findOne({ email: profile.email });
    if (user)
      return res.status(400).send("User of this email is already exist");
    const salt = await bcrypt.genSalt(10);
    profile.password = await bcrypt.hash(profile.password, salt);
    await profile.save();
    const token = jwt.sign({ _id: profile._id }, config.get("jwtPrivateKey"));
    res.header("x-auth-token", token).send(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
