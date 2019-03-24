import * as boardApi from "../utils/boardApi";

export let RECEIVE_BOARDS = "RECEIVE_BOARDS";

export const receivedBoards = boards => {
  return {
    type: RECEIVE_BOARDS,
    boards
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
