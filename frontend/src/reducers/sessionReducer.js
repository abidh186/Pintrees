import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";

const initialState = { currentUser: null };

const SessionReducer = (state = initialState, action) => {
  //throws error if you mutate the state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    default:
      return state;
  }
};

export default SessionReducer;
