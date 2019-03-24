const db = require("../connection");

const getAllBoards = (req, res, next) => {
  db.any("SELECT * FROM boards")
    .then(boards => {
      res.status(200).json({
        status: "success",
        boards,
        message: "all boards"
      });
    })
    .then(err => next(err));
};

const getPinsByBoardId = (req, res, next) => {
  let boardId = parseInt(req.params.board_id);
  db.any(
    "SELECT pins.* FROM boards JOIN pins ON boards.id = pins.board_id WHERE boards.id = $1",
    [boardId]
  )
    .then(pins => {
      res.status(200).json({
        status: "success",
        pins: pins,
        message: "all pins on a single board"
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const creatBoard = (req, res, next) => {
  let userId = parseInt(req.body.user_id);
  db.none(
    "INSERT INTO boards(user_id, title, description) VALUES(${user_id}, ${title}, ${description})",
    {
      user_id: userId,
      title: req.body.title,
      description: req.body.description
    }
  )
    .then(() => {
      res.status(200).json({
        message: "board added"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllBoards,
  getPinsByBoardId,
  creatBoard
};
