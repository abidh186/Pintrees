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

export default class Navbar extends Component {
  render() {
    const { logoutUser, currentUser } = this.props;
    if (!currentUser)
      return (
        <div>
          <h1>One Moment Please...</h1>
        </div>
      );
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
        <NavLink className="nav-link right-links" to={"/c"}>
          Following{" "}
        </NavLink>
        <NavLink
          className="nav-link right-links"
          exact
          to={`/${currentUser.email}`}
        >
          {currentUser.email}
        </NavLink>
        <p className="nav-link right-links" onClick={logoutUser}>
          Logout
        </p>
      </nav>
    );
  }
}
