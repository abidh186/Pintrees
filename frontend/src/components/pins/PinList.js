import React from "react";
import { withRouter } from "react-router-dom";

import "../../styles/pinList.css";
import { PinListItem } from "./PinListItem";

class PinList extends React.Component {
  componentDidMount() {
    this.props.fetchAllPins();
  }

  fetchPinList = () => {
    let pins = Object.values(this.props.pins);
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
    return <div className="pinlist-page">{this.fetchPinList()}</div>;
  }
}

export default withRouter(PinList);
