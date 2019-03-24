import { RECEIVE_BOARDS } from "../actions/boardActions.js";
import { RECEIVE_PINS } from "../actions/pinActions.js";
import deepClone from "lodash/cloneDeep";
import merge from "lodash/merge";

const normalizeData = items => {
  let obj = {};
  items.forEach(item => {
    return (obj[item.id] = item);
  });
  return obj;
};

const BoardReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let copiedState = deepClone(oldState);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return merge({}, oldState, normalizeData(action.boards));
    case RECEIVE_PINS:
      action.pins.forEach(pin => {
        if (copiedState[pin.board_id]) {
          if (copiedState[pin.board_id].pins) {
            if (!copiedState[pin.board_id].pins.includes(pin.id)) {
              copiedState[pin.board_id].pins.push(pin.id);
            }
          } else {
            copiedState[pin.board_id].pins = [pin.id];
          }
        } else {
          copiedState[pin.board_id] = { id: pin.board_id, pins: [pin.id] };
        }
      });
      return copiedState;
    default:
      return oldState;
  }
};

export default BoardReducer;
