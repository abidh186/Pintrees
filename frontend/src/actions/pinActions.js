import * as pinApi from "../utils/pinApi";
import * as sessionApi from "../utils/sessionApi";

export let RECEIVE_PINS = "RECEIVE_PINS";
export let CREATE_PIN = "CREATE_PIN";
export let RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN";

export const receivedPins = pins => {
  return {
    type: RECEIVE_PINS,
    pins
  };
};

export const receivedSinglePin = pin => {
  return {
    type: RECEIVE_SINGLE_PIN,
    pin
  };
};

export const createdPin = postPin => {
  return {
    type: CREATE_PIN,
    postPin: postPin
  };
};

export const getPinsByBoardId = board_id => dispatch => {
  return pinApi.getPinsByBoardId(board_id).then(res => {
    debugger;
    return dispatch(receivedPins(res.data.pins));
  });
};

export const getPinsByUserId = user_id => dispatch => {
  return sessionApi
    .getPinsByUserId(user_id)
    .then(res => {
      return dispatch(receivedPins(res.data.pins));
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchAllPins = () => dispatch => {
  return pinApi
    .getAllPins()
    .then(res => {
      return dispatch(receivedPins(res.data.pins));
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchSinglePin = id => dispatch => {
  return pinApi
    .getSinglePin(id)
    .then(res => {
      return dispatch(receivedSinglePin(res.data.pin));
    })
    .catch(err => {
      console.log(err);
    });
};

export const createPin = pin => dispatch => {
  return pinApi
    .createPin(pin)
    .then(res => {
      return dispatch(createdPin(res.data.pins));
    })
    .catch(err => {
      console.log(err);
    });
};
