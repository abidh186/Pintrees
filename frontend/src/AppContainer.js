import { connect } from "react-redux";
import App from "./App";
import { checkAuthenticationStatus } from "./actions/sessionActions.js";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkAuthenticationStatus: () => dispatch(checkAuthenticationStatus())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
