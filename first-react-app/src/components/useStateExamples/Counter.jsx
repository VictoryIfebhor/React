import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increaseCounter = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => setValue(value - 1)}>-ve</button>
        <button onClick={() => setValue(0)}>reset</button>
        <button onClick={() => setValue(value + 1)}>+ve</button>
      </section>
      <section>
        <h2>Timed Counter</h2>
        <h1>{value}</h1>
        <button onClick={increaseCounter}>+ve</button>
      </section>
    </>
  );
};

export default Counter;
