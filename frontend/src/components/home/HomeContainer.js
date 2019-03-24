import { connect } from "react-redux";
import Home from "./Home";
import { withRouter } from "react-router-dom";
import { logoutUser, getUser } from "../../actions/sessionActions.js";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getUser: () => dispatch(getUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
