import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  const displayWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Add listener");
    window.addEventListener("resize", displayWindowSize);
  }, []);

  return (
    <>
      <h1>Window</h1>
      <h1>{size} PX</h1>
    </>
  );
};

export default CleanUp;
