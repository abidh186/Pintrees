import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

// <img
//   id="logo-img"
//   src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c52e.png"
//   alt=""
//   />
// import { Search } from "./Search";
// <Search />
// <NavLink className="nav-link right-links" to={"/c"}>
//   Following{" "}
// </NavLink>

export default class Navbar extends Component {
  modifyEmail = email => {
    let idx = email.indexOf("@");
    if (idx !== -1) {
      return email.slice(0, idx);
    }
    return email;
  };

  logoutAndClearBoards = async () => {
    await this.props.logoutUser();
    await this.props.clearBoards();
  };

  render() {
    const { logoutUser, currentUser } = this.props;
    if (!currentUser)
      return (
        <div>
          <h1>One Moment Please...</h1>
        </div>
      );
    let username = this.modifyEmail(currentUser.email);
    return (
      <nav>
        <NavLink className="logo-link" to={"/"}>
          <div className="logo-container">
            <i className="fas fa-tree logo fa-2x" />
          </div>
        </NavLink>
        <div className="search-box">
          <div className="search-icon-container">
            <i className="fas fa-search search-icon" />
          </div>
          <form>
            <input className="search-input" type="text" placeholder="Search" />
          </form>
        </div>

        <NavLink className="nav-link right-links" exact to={"/"}>
          Home{" "}
        </NavLink>
        <NavLink className="nav-link right-links" exact to={`/${username}`}>
          {username}
        </NavLink>
        <p className="nav-link right-links" onClick={this.logoutAndClearBoards}>
          Logout
        </p>
      </nav>
    );
  }
}
