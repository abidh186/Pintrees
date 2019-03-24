const express = require("express");
const router = express.Router();

const {
  getAllPins,
  getSinglePin,
  createPin
} = require("../db/queries/pinQueries.js");

router.get("/", getAllPins);
router.get("/:id", getSinglePin);
router.post("/", createPin);

module.exports = router;
