import React, { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("Welcome");
  const clickHandler = () => {
    if (title === "Welcome") {
      setTitle("Hurray!");
    } else {
      setTitle("Welcome");
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <button onClick={clickHandler}>Click to change title</button>
    </>
  );
};

export default Header;
