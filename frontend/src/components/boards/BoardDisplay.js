import React, { Component } from "react";
import { Link } from "react-router-dom";

import BoardItemContainer from "./BoardItemContainer.js";

class BoardDisplay extends Component {
  componentDidMount = () => {
    let { id } = this.props.currentUser;
    this.props.getBoardsById(id);
    this.props.fetchAllPins();
  };
  modifyEmail = email => {
    let idx = email.indexOf("@");
    if (idx !== -1) {
      return email.slice(0, idx);
    }
    return email;
  };

  displayBoards = () => {
    let { email } = this.props.currentUser;
    let username = this.modifyEmail(email);
    let { boards } = this.props;
    let boardList = boards.map(board => {
      return (
        <Link key={board.id} to={`/${username}/boards/${board.id}`}>
          <BoardItemContainer board={board} />
        </Link>
      );
    });
    return <div className="board-display">{boardList}</div>;
  };

  render() {
    return <div>{this.displayBoards()}</div>;
  }
}

export default BoardDisplay;
