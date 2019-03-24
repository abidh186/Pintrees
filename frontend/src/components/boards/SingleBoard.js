import React from "react";

import { PinListItem } from "../pins/PinListItem";
import "../../styles/pinList.css";

class SingleBoard extends React.Component {
  componentDidMount = () => {
    let board_id = this.props.match.params.id;
    let user_id = this.props.currentUser.id;
    // debugger;
    this.props.getBoardsById(user_id);
    this.props.getPinsByBoardId(board_id);
  };

  fetchPinList = () => {
    let pins = this.props.pins;
    if (pins.length) {
      let pinList = pins.map(pin => {
        return (
          <PinListItem
            key={pin.id}
            id={pin.id}
            image={pin.pinimg_url}
            title={pin.title}
          />
        );
      });
      return <div className="pins-display">{pinList}</div>;
    }
  };

  render() {
    if (!this.props.pins.length) return null;
    // if(!this.props.match.params.id) return null;
    let id = this.props.match.params.id;
    // if (!Object.values(this.props.boards).length) return null;
    // if (
    //   Object.values(this.props.pins).length > this.props.boards[id].pins.length
    // )
    // return null;
    let title = this.props.boards[id].title;
    return (
      <div className="single-board-page">
        <h2>Board id: {id} </h2>
        <h2>Board title: {title} </h2>
        <div>{this.fetchPinList()}</div>
      </div>
    );
  }
}

export default SingleBoard;
