const express = require("express");
const router = express.Router();

const Hours = require("../models/Hours");

router.get("/", (req, res) => {
  Hours.find()
    .lean()
    .then((response) => {
      res.send({ status: 200, data: response });
    })
    .catch((err) => {
      res.send({ status: 400, error: err });
    });
});

module.exports = router;
