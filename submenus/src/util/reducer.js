const reducer = (state, action) => {
  if (action.type === "CLOSE_SIDEBAR") {
    return {
      ...state,
      showSidebar: false,
    };
  }
  if (action.type === "OPEN_SIDEBAR") {
    return {
      ...state,
      showSidebar: true,
    };
  }
  if (action.type === "CLOSE_SUBMENU") {
    return {
      ...state,
      showSubmenu: false,
    };
  }
  if (action.type === "OPEN_SUBMENU") {
    const { location, navPage } = action.payload;
    const navSubmenu = state.sublinks.find(
      (item) => item.page === navPage
    ).links;
    return {
      ...state,
      showSubmenu: true,
      location,
      navPage,
      navSubmenu,
    };
  }
  throw new Error("Dispatch type is not assigned");
};

export default reducer;
