import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Question = ({ id, title, info, clickHandler, active }) => {
  const isActive = active === id;
  return (
    <section className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => clickHandler(id)}>
          {isActive ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      <p>{isActive && info}</p>
    </section>
  );
};

export default Question;
