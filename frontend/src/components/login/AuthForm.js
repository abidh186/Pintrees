import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../../styles/landing.css";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
    age: ""
  };

  componentDidMount() {
    this.props.fetchAllPins();
  }

  fetchPinList = () => {
    let pins = Object.values(this.props.pins);
    if (pins.length) {
      let pinList = pins.map(pin => {
        return (
          <div key={pin.id} className="landing-img-div">
            <img src={pin.pinimg_url} alt="" />
          </div>
        );
      });
      return <div className="landing-imgs-display">{pinList}</div>;
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLoginSubmit = e => {
    const { email, password } = this.state;
    let user = { email, password };
    e.preventDefault();
    this.props.loginUser(user);
  };

  modifyEmail = email => {
    let idx = email.indexOf("@");
    if (idx !== -1) {
      return email.slice(0, idx);
    }
    return email;
  };

  handleRegisterSubmit = async e => {
    const { email, password, age } = this.state;
    let user = { email, password, age };
    let loginParams = { email, password };
    e.preventDefault();
    await this.props.registerUser(user);
    await this.props.loginUser(loginParams);
  };

  render() {
    if (!Object.values(this.props.pins).length) return null;
    const { email, password, age } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/auth/login"
            render={() => {
              return (
                <LoginForm
                  email={email}
                  password={password}
                  loginUser={this.handleLoginSubmit}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          <Route
            path="/auth/register"
            render={() => {
              return (
                <RegisterForm
                  age={age}
                  email={email}
                  password={password}
                  registerUser={this.handleRegisterSubmit}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
        </Switch>
        <div className="background">{this.fetchPinList()}</div>
      </div>
    );
  }
}

export default AuthForm;
