import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserProfile from "./UserProfile";
import { createBoard, getBoardsById } from "../../actions/boardActions.js";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    pins: state.pins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBoard: board => dispatch(createBoard(board)),
    getBoardsById: id => dispatch(getBoardsById(id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);
