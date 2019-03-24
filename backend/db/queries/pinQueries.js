const db = require("../connection");

const getAllPins = (req, res, next) => {
  db.any("SELECT * FROM pins")
    .then(pins => {
      res.status(200).json({
        status: "success",
        pins: pins,
        message: "all pins"
      });
    })
    .catch(err => next(err));
};

const getSinglePin = (req, res, next) => {
  db.one("SELECT * FROM pins WHERE id = ${id}", {
    id: parseInt(req.params.id)
  })
    .then(pin => {
      res.status(200).json({
        status: "success",
        pin: pin,
        message: "single pin"
      });
    })
    .catch(err => next(err));
};

// const getPinsByUserId = (req, res, next) => {
//   let userId = parseInt(req.params.user_id);
//   db.any(
//     "SELECT * FROM (SELECT board_id, boards.title AS board_title, boards.user_id, pins.id AS pin_id FROM pins JOIN boards ON pins.board_id = boards.id) AS x WHERE x.user_id = $1",
//     [userId]
//   )
//     .then(pins => {
//       res.status(200).json({
//         status: "success",
//         pins: pins,
//         message: "all pins on a single board"
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       next();
//     });
// };

const createPin = (req, res, next) => {
  let boardId = parseInt(req.body.board_id);
  let userId = parseInt(req.body.user_id);
  db.one(
    "INSERT INTO pins(user_id, board_id, title, description, webpage_url, pinimg_url)VALUES (${user_id}, ${board_id}, ${title}, ${description}, ${webpage_url}, ${pinimg_url}) RETURNING title",
    {
      user_id: userId,
      board_id: boardId,
      title: req.body.title,
      description: req.body.description,
      webpage_url: req.body.webpage_url,
      pinimg_url: req.body.pinimg_url
    }
  )
    .then(pin => {
      res.status(200).json({
        status: "success",
        pin: pin,
        message: "Pin Added"
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

module.exports = {
  getAllPins,
  getSinglePin,
  createPin
};
