import React, { Component } from "react";

import "../../styles/BoardItem.css";
class BoardItem extends Component {
  // componentDidMount = () => {
  //   let board_id = this.props.board.id;
  //   // this.props.getPinsByBoardId(board_id);
  // };

  displayBoardItem = () => {
    let { board } = this.props;
    if (!board.pins) return null;
    let imgArr = board.pins;
    let newArr = [];
    if (imgArr.length > 8) {
      newArr = imgArr.slice(0, 8);
    } else {
      newArr = imgArr;
    }

    let imgs = newArr.map(pinId => {
      return (
        <div key={pinId} className="board-pin">
          <img src={this.props.pins[pinId].pinimg_url} alt="" />
        </div>
      );
    });
    return imgs;
  };

  render() {
    let { board } = this.props;
    if (Object.values(this.props.pins).length < 50) return null;
    return (
      <div>
        <div className="board">{this.displayBoardItem()}</div>
        <div className="board-item-info">
          <h4>{board.title}</h4>
          <br />
          <p>{board.pins ? board.pins.length : 0} pins</p>
        </div>
      </div>
    );
  }
}

export default BoardItem;
