import React from "react";

const Card = ({ id, title, description, deleteBlog }) => {
  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>{description}</p>
      {deleteBlog ? (
        <button onClick={() => deleteBlog(id)}>delete</button>
      ) : null}
    </div>
  );
};

export default Card;
