import React, { useState, useEffect } from "react";

import data from "./data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

const App = () => {
  const [menus, setMenus] = useState(data);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const categories = data.reduce(
      (acc, menuItem) => {
        const alreadyIncluded = acc.includes(menuItem.category);
        return alreadyIncluded ? acc : [...acc, menuItem.category];
      },
      ["all"]
    );
    setCategories(categories);
  }, [menus]);

  const filterMenus = (category) => {
    const newMenus =
      category === "all"
        ? data
        : data.filter((menu) => menu.category === category);
    setMenus(newMenus);
    setActiveCategory(category);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterFunc={filterMenus}
          categories={categories}
          activeCategory={activeCategory}
        />
        <Menu menus={menus} categories={categories} />
      </section>
    </main>
  );
};

export default App;
