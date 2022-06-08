import React from "react";

import icon from "../logo.svg";

const Card = ({ image, rating, numOfRatings, country, price }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt="image" />
      </div>
      <div className="stats">
        <img src={icon} alt="star" />
        <span>{rating || 0.0}</span>
        <span className="gray">({numOfRatings || 0})</span>
        <span className="gray">{country}</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda
      </p>
      <p>
        <b>From ${price || 0}</b> / person
      </p>
    </div>
  );
};

export default Card;
