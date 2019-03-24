import React from "react";

import { PinListItem } from "../pins/PinListItem";
import "../../styles/pinList.css";

class UserPins extends React.Component {
  componentDidMount = () => {
    this.props.fetchAllPins();
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
    if (Object.values(this.props.pins).length > 99) return null;
    return (
      <div className="user-pins-div">
        <div>{this.fetchPinList()}</div>
      </div>
    );
  }
}

export default UserPins;
