import React, { useState, useEffect } from "react";

const BasicExample = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Use Effect!!!!");
    if (value > 0) {
      document.title = `${value} new messages`;
    }
  }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>+ve</button>
    </div>
  );
};

export default BasicExample;
