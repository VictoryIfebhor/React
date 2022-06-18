import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

const AppContext = createContext();

const defaultState = {
  loading: true,
  searchText: "",
  cocktails: [],
  error: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const cocktail = state.searchText || "a";
      const response = await fetch(`${url}?s=${cocktail}`);
      const data = await response.json();
      dispatch({ type: "DISPLAY_DRINKS", payload: data.drinks || [] });
    } catch (error) {
      dispatch({ type: "FAILED_FETCH" });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [state.searchText]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalCOntext = () => {
  return useContext(AppContext);
};
