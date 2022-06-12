import React from "react";

const Categories = ({ filterFunc, categories, activeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={index} // categories won't be mutated by user
            className={`filter-btn ${isActive && "active-btn"}`}
            onClick={() => filterFunc(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
