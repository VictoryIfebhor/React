import React, { useContext } from "react";

import ItemContext from "./itemContext";

const SingleItem = ({ id, title }) => {
  const { removeItem } = useContext(ItemContext);

  return (
    <div className="item">
      <h4>{title}</h4>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  );
};

export default SingleItem;
