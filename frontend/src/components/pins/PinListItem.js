import React from "react";
import { Link } from "react-router-dom";

export const PinListItem = ({ image, title, id }) => {
  let capTitle = title.charAt(0).toUpperCase() + title.slice(1);
  let modifiedTitle =
    capTitle.length > 25 ? capTitle.slice(0, 27).concat(" ...") : capTitle;
  return (
    <div className="pin-div">
      <Link className="pin-list-item-link" to={`/pins/${id}`}>
        <div id={id} className="img-div">
          <img src={image} alt="" />
          <div className="pin-list-item-message-div">
            <p className="pin-list-hover-message">{modifiedTitle}</p>
            <p className="img-dots">•••</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
