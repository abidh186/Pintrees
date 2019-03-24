import { connect } from "react-redux";
import { SinglePinDisplay } from "./SinglePinDisplay.js";

import { fetchSinglePin } from "../../actions/pinActions.js";

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.pins[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePin: id => dispatch(fetchSinglePin(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePinDisplay);
