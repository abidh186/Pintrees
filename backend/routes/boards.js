const express = require("express");
const router = express.Router();

const {
  getAllBoards,
  getPinsByBoardId,
  creatBoard
} = require("../db/queries/boardQueries.js");

router.get("/", getAllBoards);
router.get("/:board_id", getPinsByBoardId);
router.post("/", creatBoard);

module.exports = router;
