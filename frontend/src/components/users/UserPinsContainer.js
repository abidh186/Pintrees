import { connect } from "react-redux";
import UserPins from './UserPins';

import { fetchAllPins } from '../../actions/pinActions.js'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    pins: Object.values(state.pins).filter(pin => pin.user_id === state.session.currentUser.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPins);
