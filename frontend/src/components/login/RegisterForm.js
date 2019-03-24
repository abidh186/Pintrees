import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const RegisterForm = ({
  match,
  age,
  email,
  password,
  registerUser,
  handleChange
}) => {
  return (
    <div className="form-div-container">
      <NavLink className="toggle-button" to="/auth/login">
        <p>Log in</p>
      </NavLink>
      <div className="form-div">
        <div className="logo-div">
          <i className="fas fa-tree" />
        </div>
        <div className="session-container">
          <h3 className="session-signup">Signup to see more</h3>
        </div>
        <div className="text-container">
          <h3 className="form-text">
            Access Pintrees best ideas with a free account
          </h3>
        </div>
        <form onSubmit={registerUser}>
          <div className="input-container">
            <input
              className="form-input"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="input-container">
            <input
              className="form-input"
              type="text"
              value={password}
              name="password"
              placeholder="Create Password"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="input-container">
            <input
              className="form-input"
              type="text"
              value={age}
              name="age"
              placeholder="Age"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="button-div">
            <button className="form-button" type="submit">
              Continue
            </button>
          </div>
        </form>
        <p id="or">OR</p>
        <NavLink id="or-else-button" to="/auth/login">
          <button id="other-option" className="form-button" type="submit">
            Log in
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(RegisterForm);
