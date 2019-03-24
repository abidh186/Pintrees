import { connect } from "react-redux";
import NewPin from "./NewPin";

import { getBoardsById } from "../../actions/boardActions.js";
import { createPin } from "../../actions/pinActions.js";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBoardsById: id => dispatch(getBoardsById(id)),
    createPin: pin => dispatch(createPin(pin))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPin);
