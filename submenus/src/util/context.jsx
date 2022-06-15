import { createContext, useReducer, useContext } from "react";

import sublinks from "../data";
import reducer from "./reducer";

const AppContext = createContext();

const defaultState = {
  showSidebar: false,
  showSubmenu: false,
  location: { positionCenter: "", positionBottom: "" },
  sublinks,
  navPage: "",
  navSubmenu: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
