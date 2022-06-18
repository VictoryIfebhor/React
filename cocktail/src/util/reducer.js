const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_DRINKS":
      return {
        ...state,
        cocktails: action.payload,
        loading: false,
        error: false,
      };
    case "FAILED_FETCH":
      return { ...state, loading: false, error: true };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload.text };
    default:
      throw new Error(`${action.type} action is not handled`);
  }
};

export default reducer;
