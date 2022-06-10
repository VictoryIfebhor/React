import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import data from "../data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const prevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : data.length - 1;
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex < data.length - 1 ? prevIndex + 1 : 0;
      return newIndex;
    });
  };

  const randomPerson = () => {
    const generateRandomIndex = () => {
      return Math.floor(Math.random() * data.length);
    };
    setIndex((prevIndex) => {
      let randomIndex = generateRandomIndex();
      while (prevIndex === randomIndex) {
        randomIndex = generateRandomIndex();
      }
      return randomIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        random
      </button>
    </article>
  );
};

export default Review;
