import * as boardApi from "../utils/boardApi";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const CREATE_BOARD = "CREATE_BOARD";
export const CLEAR_BOARDS = "CLEAR_BOARDS";

export const clearBoards = () => ({
  type: CLEAR_BOARDS
});

export const receivedBoards = boards => {
  return {
    type: RECEIVE_BOARDS,
    boards
  };
};

export const createdBoard = board => {
  return {
    type: CREATE_BOARD,
    board
  };
};

export const getBoardsById = user_id => dispatch => {
  return boardApi
    .getBoardsById(user_id)
    .then(res => {
      return dispatch(receivedBoards(res.data.boards));
    })
    .catch(err => {
      console.log(err);
    });
};

export const createBoard = board => dispatch => {
  return boardApi
    .createBoard(board)
    .then(res => {
      return dispatch(createdBoard(res.data.board));
    })
    .catch(err => {
      console.log(err);
    });
};
