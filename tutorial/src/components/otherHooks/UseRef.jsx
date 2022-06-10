import React, { useRef, useEffect } from "react";

// majorly used to target DOM nodes/elements

const UseRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" ref={inputRef} />
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRef;
