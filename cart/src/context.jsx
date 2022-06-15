import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.netlify.app/api/react-useReducer-cart-project";

const AppContext = createContext();

const defaultState = {
  cart: cartItems,
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
