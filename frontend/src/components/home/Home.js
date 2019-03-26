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
  modifyEmail = email => {
    let idx = email.indexOf("@");
    if (idx !== -1) {
      return email.slice(0, idx);
    }
    return email;
  };
  render() {
    if (!this.props.currentUser) return null;
    let { email } = this.props.currentUser;
    let username = this.modifyEmail(email);
    return (
      <div className="Homepage">
        <NavbarContainer />
        <Switch>
          <Route
            exact
            path={`/${username}/boards/:id`}
            component={SingleBoardContainer}
          />
          <Route exact path="/" component={PinListContainer} />
          <Route
            exact
            path={`/${username}/pinbuilder`}
            component={NewPinContainer}
          />
          <Route path={`/${username}`} component={UserProfileContainer} />
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
