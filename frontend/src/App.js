import React, { Component } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
// import axios from "axios";
// import Users from "./users/Users";
import AuthFormContainer from "./components/login/AuthFormContainer.js";
// import Auth from "./utils/Auth";
import HomeContainer from "./components/home/HomeContainer.js";
import { AuthRoute, ProtectedRoute } from "./utils/AuthRouting.js";

class App extends Component {
  componentDidMount() {
    // check if user is logged in on refresh
    this.props.checkAuthenticationStatus();
  }

  render() {
    return (
      <div>
        <AuthRoute path={"/auth"} component={AuthFormContainer} />
        <ProtectedRoute path={"/"} component={HomeContainer} />
      </div>
    );
  }
}

export default App;
