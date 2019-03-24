import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer.js";
// import registerServiceWorker from "./registerServiceWorker";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
import RootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
const store = createStore(RootReducer, {}, applyMiddleware(thunk, logger));
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
