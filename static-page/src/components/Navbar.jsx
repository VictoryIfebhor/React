import React from "react";

import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="react logo" />
        <span className="title">ReactFacts</span>
      </div>
      <span>React Course - Project 1</span>
    </nav>
  );
};

export default Navbar;
