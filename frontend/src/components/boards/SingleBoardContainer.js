import { connect } from "react-redux";
import SingleBoard from "./SingleBoard";

import { getPinsByBoardId } from "../../actions/pinActions.js";
import { getBoardsById } from "../../actions/boardActions.js";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    pins: Object.values(state.pins),
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPinsByBoardId: id => dispatch(getPinsByBoardId(id)),
    getBoardsById: id => dispatch(getBoardsById(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBoard);
