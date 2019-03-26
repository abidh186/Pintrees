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
      boardTitle: "",
      missingBoard: false
    };
  }

  handleChange = e => {
    this.setState({
      boardTitle: e.target.value,
      missingBoard: false
    });
  };

  executeCreateBoard = async data => {
    let { currentUser } = this.props;
    await this.props.createBoard(data);
    await this.props.getBoardsById(currentUser.id);
  };

  submitCreateForm = e => {
    e.preventDefault();
    let { boardTitle } = this.state;
    if (!boardTitle) {
      return this.setState({
        missingBoard: true
      });
    }
    let userId = parseInt(this.props.currentUser.id, 10);
    let boardData = {
      user_id: userId,
      title: boardTitle
    };
    this.setState({
      missingBoard: false,
      displayBoard: false
    });
    return this.executeCreateBoard(boardData);
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
        addStuff: false,
        missingBoard: false
      });
    }
  };

  hideBoardForm = () => {
    if (this.state.displayBoard) {
      this.setState({
        displayBoard: false,
        addStuff: false,
        missingBoard: false
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
    let { displayBoard, missingBoard } = this.state;
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
            <form onSubmit={this.submitCreateForm}>
              <div className="board-header">
                <h2>Create Board</h2>
                <div>
                  <i onClick={this.hideBoardForm} className="fas fa-times" />
                </div>
              </div>

              <br />
              <div className="name-and-input">
                <p>Name</p>
                <input
                  className={missingBoard ? "missing-board" : "board-input"}
                  onChange={this.handleChange}
                  type="text"
                />
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

  modifyEmail = email => {
    let idx = email.indexOf("@");
    if (idx !== -1) {
      return email.slice(0, idx);
    }
    return email;
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
    let username = this.modifyEmail(currentUser.email);
    return (
      <div onClick={this.hideAddOption}>
        {displayBoard ? this.displayBoardForm() : null}
        <div className={displayBoard ? "fix-background" : null}>
          <div className="profile-page">
            {this.state.addStuff ? (
              <div className="add-stuff-menu">
                <NavLink
                  onClick={this.handleClick}
                  to={`/${username}/pinbuilder`}
                >
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
                <h2 id="profile-page-username">{username}</h2>
              </div>
            </div>

            <div className="profile-item-links">
              <NavLink
                className={this.state.highlight ? "active" : null}
                to={`/${username}/boards`}
              >
                Boards
              </NavLink>
              <NavLink onClick={this.handleClick} to={`/${username}/pins`}>
                Pins
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route path={`/${username}/pins`} component={UserPinsContainer} />
            <Route
              exact
              path={`/(${username}|${username}/boards)`}
              component={BoardDisplayContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default UserProfile;
