import React from "react";

import SingleItem from "./SingleItem";

const List = ({ items, removeItem }) => {
  return (
    <>
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default List;
