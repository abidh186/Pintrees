import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AuthForm from "./AuthForm.js";
import { registerUser, loginUser } from "../../actions/sessionActions.js";
import { fetchAllPins } from "../../actions/pinActions.js";
import { createBoard } from "../../actions/boardActions.js";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    pins: state.pins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(registerUser(user)),
    loginUser: user => dispatch(loginUser(user)),
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthForm)
);
