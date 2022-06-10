import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setIsError((prevState) => !prevState);
        }}
      >
        toggle error
      </button>
      <br />
      First Value: <h1>{text || "Hello World!"}</h1>
      <hr />
      <h1>{isError && "Error..."}</h1>
      <hr />
      {text ? <p>There is a text</p> : <p>No text found</p>}
    </>
  );
};

export default ShortCircuit;
