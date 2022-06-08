import React from "react";

import image from "./favicon.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./data.json";

const App = () => {
  const cards = data.map((item, pos) => {
    return <Card key={pos} image={image} {...item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-container">{cards}</div>
    </div>
  );
};

export default App;
