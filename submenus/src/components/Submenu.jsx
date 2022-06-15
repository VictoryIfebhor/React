import React, { useEffect, useRef } from "react";

import { useGlobalContext } from "../util/context";
import SingleSubmenu from "./SingleSubmenu";

const Submenu = () => {
  const { state, dispatch } = useGlobalContext();
  const submenu = useRef(null);

  useEffect(() => {
    const { positionCenter, positionBottom } = state.location;
    submenu.current.style.left = `${positionCenter}px`;
    submenu.current.style.top = `${positionBottom}px`;
  }, [state.location]);

  return (
    <aside ref={submenu} className={`submenu ${state.showSubmenu && "show"}`}>
      <SingleSubmenu
        links={state.navSubmenu}
        page={state.navPage}
        cssClass={`submenu-center col-${
          state.navSubmenu.length > 3 ? 4 : state.navSubmenu.length
        }`}
      />
    </aside>
  );
};

export default Submenu;
