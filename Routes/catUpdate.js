const express = require("express");
const router = express.Router();
const Cat = require("../models/Catagory");

router.post(
  "/",

  async (req, res) => {
    let data = await req.body;

    try {
      const result = Cat.updateMany(
        { id: data.id },
        { name: data.name },
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
