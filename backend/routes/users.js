const express = require("express");
const router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

const {
  createUser,
  loginUser,
  isLoggedIn,
  logoutUser,
  getBoardsByUserId,
  getPinsByUserId,
  getAllUserIds
} = require("../db/queries/userQueries.js");

/* GET users listing. */
router.get("/:user_id/boards", getBoardsByUserId);
router.post("/new", createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/getuser", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);
router.get("/:user_id/pins", getPinsByUserId);
router.get("/", getAllUserIds);

module.exports = router;
