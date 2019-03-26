import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import "../../styles/landing.css";

class LoginForm extends Component {
  // componentDidMount = () => {
  //   let user_id = this.props.currentUser.id;
  //   this.props.getBoardsById(user_id);
  // };

  checkForBoards = () => {
    let { boards } = this.props;
    let filteredBoards = boards.filter(board => {
      return board.title !== undefined;
    });
    return !!filteredBoards.length;
  };

  render() {
    let { email, password, loginUser, handleChange } = this.props;
    return (
      <div className="form-div-container">
        <NavLink className="toggle-button" to="/auth/register">
          <p>Sign up</p>
        </NavLink>
        <div className="form-div">
          <div className="logo-div">
            <i className="fas fa-tree" />
          </div>
          <div className="session-container">
            <h3 className="session-signup">Log in to see more</h3>
          </div>
          <div className="text-container">
            <h3 className="form-text">
              Access Pintrees best ideas with a free account
            </h3>
          </div>
          <form onSubmit={loginUser}>
            <div className="input-container">
              <input
                className="form-input"
                type="text"
                value={email}
                name="email"
                placeholder="Email or phone number"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="input-container">
              <input
                className="form-input"
                type="password"
                value={password}
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="button-div">
              <button className="form-button" type="submit">
                Log in
              </button>
            </div>
          </form>
          <p id="or">OR</p>
          <NavLink id="or-else-button" to="/auth/register">
            <button id="other-option" className="form-button" type="submit">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

// <div className="form-div">
//   <div className="logo-div">
//     <img
//       src="https://www.freeiconspng.com/uploads/white-pinterest-logo-on-black-16.png"
//       alt="logo"
//       className="session-logo"
//     />
//   </div>
//   <div className="session-container">
//     <h3 className="session-signup">Log in to see more</h3>
//   </div>
//   <div className="text-container">
//     <h3 className="form-text">
//       Access Poshpin's best ideas with a free account
//     </h3>
//   </div>
//   <form onSubmit={this.handleSubmit}>
//     <div className="input-container">
//       <input
//         onChange={this.handleChange}
//         name="email"
//         value={this.state.email}
//         className="form-input"
//         type="text"
//         placeholder="Email or phone number"
//       />
//       <br />
//     </div>
//     <div className="input-container">
//       <input
//         onChange={this.handleChange}
//         name="password_digest"
//         value={this.state.password_digest}
//         className="form-input"
//         type="password"
//         placeholder="Password"
//       />
//     </div>
//     <br />
//     <button type="submit" className="form-button">
//       Log in
//     </button>
//   </form>
// </div>;
