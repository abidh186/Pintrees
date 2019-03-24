import React from "react";
import { Link } from "react-router-dom";

export const PinListItem = ({ image, title, id }) => {
  return (
    <div className="pin-div">
      <Link className="pin-list-item-link" to={`/pins/${id}`}>
        <div id={id} className="img-div">
          <img src={image} alt="" />
          <div className="pin-list-item-message-div">
            <p className="pin-list-hover-message">Picked for you</p>
            <p className="img-dots">•••</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
