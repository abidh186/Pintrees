import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserProfile from "./UserProfile";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    pins: state.pins
  };
};

export default withRouter(connect(mapStateToProps)(UserProfile));
