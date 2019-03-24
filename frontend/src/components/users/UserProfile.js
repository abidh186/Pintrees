import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import UserPinsContainer from "./UserPinsContainer.js";
import BoardDisplayContainer from "../boards/BoardDisplayContainer.js";
import "../../styles/UserProfile.css";

class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      highlight: true,
      addStuff: false,
      displayBoard: false,
      boardTitle: ""
    };
  }

  handleChange = e => {
    this.setState({
      boardTitle: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
  };

  handleClick = event => {
    if (this.state.highlight) {
      this.setState({
        highlight: false
      });
    }
  };

  addClick = () => {
    this.setState({
      addStuff: !this.state.addStuff
    });
  };

  hideAddOption = () => {
    if (this.state.addStuff) {
      this.setState({
        addStuff: false
      });
    }
  };

  hideBoardForm = () => {
    if (this.state.displayBoard) {
      this.setState({
        displayBoard: false,
        addStuff: false
      });
    }
  };

  showCreateBoard = e => {
    e.preventDefault();
    this.setState({
      displayBoard: true,
      addStuff: false
    });
  };

  displayBoardForm = () => {
    let { currentUser } = this.props;
    let { displayBoard } = this.state;
    if (displayBoard) {
      return (
        <div className="board-parent">
          <div
            className="board-modal-container"
            onClick={() => {
              this.hideAddOption();
              this.hideBoardForm();
            }}
          />
          <div className="board-modal">
            <form>
              <div className="board-header">
                <h2>Create Board</h2>
                <div>
                  <i onClick={this.hideBoardForm} className="fas fa-times" />
                </div>
              </div>

              <br />
              <div className="name-and-input">
                <p>Name</p>
                <input onChange={this.handleChange} type="text" />
              </div>
              <br />
              <div>
                <button className="submit-board-button">Create</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  render() {
    //use email as username for now
    let { displayBoard } = this.state;
    console.log(this.state);
    let { currentUser } = this.props;
    if (!currentUser)
      return (
        <div>
          <h1>One Moment Please...</h1>
        </div>
      );
    let email = currentUser.email;
    return (
      <div onClick={this.hideAddOption}>
        {displayBoard ? this.displayBoardForm() : null}
        <div className={displayBoard ? "fix-background" : null}>
          <div className="profile-page">
            {this.state.addStuff ? (
              <div className="add-stuff-menu">
                <NavLink onClick={this.handleClick} to={`/${email}/pinbuilder`}>
                  <p>Create Pin</p>
                </NavLink>
                <div className="create-board" onClick={this.showCreateBoard}>
                  <p>Create Board</p>
                </div>
              </div>
            ) : null}
            <div className="profile-left-div">
              <div>
                <i onClick={this.addClick} className="fas fa-plus" />
              </div>
              <div>
                <h2 id="profile-page-username">{email}</h2>
              </div>
            </div>

            <div className="profile-item-links">
              <NavLink
                className={this.state.highlight ? "active" : null}
                to={`/${email}/boards`}
              >
                Boards
              </NavLink>
              <NavLink onClick={this.handleClick} to={`/${email}/pins`}>
                Pins
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route path={`/${email}/pins`} component={UserPinsContainer} />
            <Route
              exact
              path={`/(${email}|${email}/boards)`}
              component={BoardDisplayContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default UserProfile;
