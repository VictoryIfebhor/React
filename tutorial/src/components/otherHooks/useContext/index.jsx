import React, { useState } from "react";

import data from "../../../../data.json";
import List from "./List";
import ItemContext from "./itemContext";

const ContextAPI = () => {
  const [items, setItems] = useState(data);

  const removeItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  return (
    <ItemContext.Provider value={{ removeItem }}>
      <h3>ContextAPI / useContext</h3>
      <List items={items} />
    </ItemContext.Provider>
  );
};

export default ContextAPI;
