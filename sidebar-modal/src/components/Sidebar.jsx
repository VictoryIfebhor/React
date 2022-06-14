import React from "react";
import { FaTimes } from "react-icons/fa";

import logo from "../logo.svg";
import { social, links } from "../data";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();
  const show = false;
  return (
    <aside className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-icons">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
