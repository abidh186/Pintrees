const db = require("../connection");

const authHelpers = require("../../auth/helpers");

const getAllUserIds = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(users => {
      let userIds = users.map(user => {
        return user.id;
      });
      res.status(200).json({
        status: "success",
        userIds: userIds,
        message: "all user ids"
      });
    })
    .catch(err => next(err));
};

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  if (req.body.age === "") {
    req.body.age = null;
  }
  db.none(
    "INSERT INTO users (email, password_digest, age) VALUES (${email}, ${password}, ${age})",
    { email: req.body.email, password: hash, age: req.body.age }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
};

const loginUser = (req, res) => {
  res.json(req.user);
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    db.one("SELECT * FROM users WHERE email=${email}", {
      email: req.user
    }).then(user => {
      res.status(200).json({
        user
      });
    });
    // res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
};

const getBoardsByUserId = (req, res, next) => {
  let userId = parseInt(req.params.user_id);
  db.any("SELECT * FROM boards WHERE boards.user_id = $1", [userId])
    .then(boards => {
      res.status(200).json({
        status: "success",
        boards: boards,
        message: "all boards for a single user"
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const getPinsByUserId = (req, res, next) => {
  let userId = parseInt(req.params.user_id);
  db.any(
    "SELECT pins.* FROM users JOIN pins ON users.id = pins.user_id WHERE users.id = $1",
    [userId]
  )
    .then(pins => {
      res.status(200).json({
        status: "success",
        pins: pins,
        message: "all pins on a single user"
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

module.exports = {
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn,
  getBoardsByUserId,
  getPinsByUserId,
  getAllUserIds
};
