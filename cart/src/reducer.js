export default (state, action) => {
  let cart;
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOAD_CART":
      return {
        ...state,
        loading: false,
        isError: action.payload.isError,
        cart: action.payload.cart,
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_FROM_CART":
      cart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
      return { ...state, cart };
    case "INCREASE_CART_ITEM_COUNT":
      cart = state.cart.map((cartItem) => {
        const amount =
          cartItem.id === action.payload.id
            ? cartItem.amount + 1
            : cartItem.amount;
        return { ...cartItem, amount };
      });
      return { ...state, cart };
    case "DECREASE_CART_ITEM_COUNT":
      cart = state.cart.map((cartItem) => {
        const amount =
          cartItem.id === action.payload.id
            ? cartItem.amount - 1
            : cartItem.amount;
        return { ...cartItem, amount };
      });
      return { ...state, cart };
    default:
      throw new Error(`${action.type} is not handled`);
  }
};
