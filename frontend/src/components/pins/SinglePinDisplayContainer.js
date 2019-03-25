import { connect } from "react-redux";
import { SinglePinDisplay } from "./SinglePinDisplay.js";

import { fetchSinglePin } from "../../actions/pinActions.js";
import { getBoardsById } from "../../actions/boardActions.js";
import { createPin } from "../../actions/pinActions.js";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    pin: state.pins[ownProps.match.params.id],
    boards: Object.values(state.boards)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBoardsById: id => dispatch(getBoardsById(id)),
    fetchSinglePin: id => dispatch(fetchSinglePin(id)),
    createPin: pin => dispatch(createPin(pin))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePinDisplay);
