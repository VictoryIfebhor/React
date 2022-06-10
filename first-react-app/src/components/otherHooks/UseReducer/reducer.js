const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: [...state.people, action.payload],
      showModal: true,
      modalContent: "Item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      modalContent: "Please provide name",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      people: state.people.filter(({ id }) => id !== action.payload.id),
      showModal: true,
      modalContent: "Item Removed",
    };
  }
  throw new Error(`${action.type} action type is not handled`);
};

export default reducer;
