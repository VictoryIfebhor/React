import React from "react";
import { FaBars } from "react-icons/fa";

import logo from "../images/logo.svg";
import { useGlobalContext } from "../util/context";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const btnMouseOverHandler = (e) => {
    const page = e.target.textContent;
    const { left, right, bottom } = e.target.getBoundingClientRect();
    const positionCenter = (left + right) / 2;
    const positionBottom = bottom - 3;
    dispatch({
      type: "OPEN_SUBMENU",
      payload: { location: { positionCenter, positionBottom }, navPage: page },
    });
  };

  const navMouseOverHandler = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      dispatch({ type: "CLOSE_SUBMENU" });
    }
  };

  return (
    <nav className="nav" onMouseOver={navMouseOverHandler}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe" className="nav-logo" />
          <button
            className="btn toggle-btn"
            onClick={() => dispatch({ type: "OPEN_SIDEBAR" })}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {state.sublinks.map(({ page }, index) => {
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={btnMouseOverHandler}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
