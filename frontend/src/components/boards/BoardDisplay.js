import React, { Component } from "react";
import { Link } from "react-router-dom";

import BoardItemContainer from "./BoardItemContainer.js";

class BoardDisplay extends Component {
  componentDidMount = () => {
    let { id } = this.props.currentUser;
    this.props.getBoardsById(id);
    this.props.fetchAllPins();
  };

  displayBoards = () => {
    let { email } = this.props.currentUser;
    let { boards } = this.props;
    let boardList = boards.map(board => {
      return (
        <Link key={board.id} to={`/${email}/boards/${board.id}`}>
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
