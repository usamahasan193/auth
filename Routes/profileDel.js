const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

router.post(
  "/",

  async (req, res) => {
    const profileId = req.body;
    try {
      await Profile.findOneAndDelete({ _id: profileId.id }, function (err) {
        if (err) console.log(err);
      });
      res.send(profileId);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
