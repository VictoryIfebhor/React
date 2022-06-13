import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

import Links from "./Links";
import SocialMedia from "./SocialMedia";
import logo from "../logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks((prevState) => !prevState)}
          >
            <FaBars />
          </button>
        </div>
        <Links showLinks={showLinks} />
        <SocialMedia />
      </div>
    </nav>
  );
};

export default Navbar;
