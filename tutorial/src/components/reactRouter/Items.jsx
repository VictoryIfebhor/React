import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../data.json";

const Items = () => {
  const [items, setItems] = useState(data);

  return (
    <div>
      <h1>Items Page</h1>
      {items.map((item) => {
        return (
          <div key={item.id} className="item">
            <h4>{item.title}</h4>
            <Link to={`items/${item.id}`}>view more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
