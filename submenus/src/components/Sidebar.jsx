import React from "react";
import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "../util/context";
import SingleSubmenu from "./SingleSubmenu";

const Sidebar = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${state.showSidebar && "show"}`}>
      <div className="sidebar">
        <button
          className="close-btn"
          onClick={() => dispatch({ type: "CLOSE_SIDEBAR" })}
        >
          <FaTimes />
        </button>
        {state.sublinks.map((item, index) => {
          return (
            <article key={index}>
              <SingleSubmenu {...item} cssClass="sidebar-sublinks" />
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
