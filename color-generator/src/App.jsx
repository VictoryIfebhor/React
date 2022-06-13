import React, { useEffect, useState, useRef } from "react";
import Values from "values.js";

import Color from "./components/Color";
import Warning from "./components/Warning";

const App = () => {
  const [color, setColor] = useState("");
  const [warning, setWarning] = useState("");
  const [isError, setIsError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsError(false);
    const selectedColor = color.trim().replace(" ", "").replace("-", "");
    try {
      const colors = new Values(selectedColor).all(10);
      console.log(colors);
      setColorList(colors);
    } catch (error) {
      const message = selectedColor ? "Invalid color" : "Must provide a color";
      setWarning(message);
      setTimeout(() => {
        setIsError(true);
      }, 50);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="color name, rgb, rgba, hex..."
            className={`${isError && "error"}`}
            ref={input}
          />
          <button className="btn">submit</button>
        </form>
        {isError && <Warning warning={warning} />}
      </section>
      <section className="colors">
        {colorList.map((color, index) => {
          return <Color key={index} {...color} hex={color.hex} />;
        })}
      </section>
    </>
  );
};

export default App;
