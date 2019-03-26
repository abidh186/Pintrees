import * as sessionApiUtil from "../utils/sessionApi";
import Auth from "../utils/Auth";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

//action creator
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const loginUser = user => dispatch => {
  return sessionApiUtil
    .loginUser(user)
    .then(res => {
      // debugger;
      Auth.authenticateUser(res.data.email);
      return dispatch(receiveCurrentUser(res.data));
    })
    .catch(err => {
      Auth.deauthenticateUser();
    });
};

export const registerUser = user => dispatch => {
  return sessionApiUtil.registerUser(user).then(() => {
    return dispatch(receiveCurrentUser(null));
  });
};

export const logoutUser = () => dispatch => {
  return sessionApiUtil.logoutUser().then(() => {
    Auth.deauthenticateUser();
    return dispatch(receiveCurrentUser(null));
  });
};

export const getUser = user => dispatch => {
  return sessionApiUtil
    .getUser(user)
    .then(res => {
      // debugger;
      Auth.authenticateUser(res.data.email);
      return dispatch(receiveCurrentUser(res.data));
    })
    .catch(err => {
      Auth.deauthenticateUser(user);
    });
};

export const checkAuthenticationStatus = () => dispatch => {
  return sessionApiUtil
    .getUser()
    .then(user => {
      // debugger;
      if (user.data.user && user.data.user.email === Auth.getToken()) {
        return dispatch(receiveCurrentUser(user.data.user));
      } else {
        if (user.data.user.email) {
          logoutUser();
          Auth.deauthenticateUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    })
    .catch(err => {
      Auth.deauthenticateUser();
    });
};
