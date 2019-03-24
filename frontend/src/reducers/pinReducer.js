import { RECEIVE_PINS, RECEIVE_SINGLE_PIN } from "../actions/pinActions.js";
import merge from "lodash/merge";

const normalizeData = items => {
  let obj = {};
  items.forEach(item => (obj[item.id] = item));
  return obj;
};

const PinReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_PINS:
      return normalizeData(action.pins);
    case RECEIVE_SINGLE_PIN:
      return merge({}, oldState, { [action.pin.id]: action.pin });
    default:
      return oldState;
  }
};

export default PinReducer;
