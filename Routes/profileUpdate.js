const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

router.post(
  "/",

  async (req, res) => {
    let data = await req.body;

    try {
      const result = Profile.updateMany(
        { _id: data.id },
        { name: data.name, email: data.email },
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
