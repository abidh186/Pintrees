import { combineReducers } from "redux";

import SessionReducer from "./sessionReducer";
import PinReducer from "./pinReducer";
import BoardReducer from "./boardReducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  pins: PinReducer,
  boards: BoardReducer
});

export default RootReducer;
