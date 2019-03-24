import { connect } from "react-redux";
import PinList from "./PinList.js";

import { fetchAllPins } from "../../actions/pinActions.js";

const mapStateToProps = state => {
  return {
    pins: state.pins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinList);
