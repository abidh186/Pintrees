import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../../styles/Homepage.css";

import NavbarContainer from "../navbar/NavbarContainer.js";
import UserProfileContainer from "../users/UserProfileContainer.js";
import PinListContainer from "../pins/PinListContainer.js";
import SinglePinDisplayContainer from "../pins/SinglePinDisplayContainer.js";
import SingleBoardContainer from "../boards/SingleBoardContainer.js";
import NewPinContainer from "../createNew/NewPinContainer.js";

class Home extends Component {
  render() {
    if (!this.props.currentUser) return null;
    let { email } = this.props.currentUser;
    return (
      <div className="Homepage">
        <NavbarContainer />
        <Switch>
          <Route
            exact
            path={`/${email}/boards/:id`}
            component={SingleBoardContainer}
          />
          <Route exact path="/" component={PinListContainer} />
          <Route
            exact
            path={`/${email}/pinbuilder`}
            component={NewPinContainer}
          />
          <Route path={`/${email}`} component={UserProfileContainer} />
          <Route
            exact
            path={`/pins/:id`}
            component={SinglePinDisplayContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default Home;
