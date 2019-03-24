import { connect } from "react-redux";
import BoardDisplay from "./BoardDisplay.js";

import { getBoardsById } from "../../actions/boardActions.js";
import { fetchAllPins } from "../../actions/pinActions.js";

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    currentUser: state.session.currentUser,
    pins: Object.values(state.pins),
    boards: Object.values(state.boards).filter(
      board => board.user_id === state.session.currentUser.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBoardsById: id => dispatch(getBoardsById(id)),
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDisplay);
