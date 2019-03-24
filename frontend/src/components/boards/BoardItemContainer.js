import { connect } from "react-redux";
import BoardItem from "./BoardItem.js";

// import { getPinsByBoardId } from "../../actions/pinActions.js";

const mapStateToProps = state => {
  return {
    pins: state.pins,
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps)(BoardItem);
