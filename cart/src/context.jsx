import { createContext, useEffect, useContext, useReducer } from "react";

import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const defaultState = {
  cart: [],
  loading: true,
  isError: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    let cart = [];
    let isError = false;
    try {
      const resp = await fetch(url);
      cart = await resp.json();
    } catch (error) {
      isError = true;
      console.log(error);
    }
    dispatch({ type: "LOAD_CART", payload: { cart, isError } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
