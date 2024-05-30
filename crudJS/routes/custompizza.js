const express = require("express");
const router = express.Router();
const Alien = require("../models/custompizzamodel");

router.get("/custompizza", async (req, res, next) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (error) {
    res.send("Error" + error);
  }
});

module.exports = router;
