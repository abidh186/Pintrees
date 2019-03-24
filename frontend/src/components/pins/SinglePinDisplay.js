import React from "react";
import { Link } from "react-router-dom";

export class SinglePinDisplay extends React.Component {
  componentDidMount = () => {
    // debugger;
    let id = this.props.match.params.id;
    this.props.fetchSinglePin(id);
  };

  render() {
    if (!this.props.pin) return null;
    let { title, pinimg_url, id } = this.props.pin;
    return (
      <div>
        <h1>{title}</h1>
        <Link to={`/`}>Back</Link>
        <div className="single-pin-display">
          <p>id: {id}</p>
          <img src={pinimg_url} alt="" />
        </div>
      </div>
    );
  }
}
