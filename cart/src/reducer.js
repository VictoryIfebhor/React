export default (state, action) => {
  let cart;
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_FROM_CART":
      cart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
      return { ...state, cart };
    case "INCREASE_CART_ITEM_COUNT":
      cart = state.cart.map((cartItem) => {
        let { amount } = cartItem;
        if (cartItem.id === action.payload.id) {
          amount += 1;
        }
        return { ...cartItem, amount };
      });
      return { ...state, cart };
    case "DECREASE_CART_ITEM_COUNT":
      cart = state.cart.map((cartItem) => {
        let { amount } = cartItem;
        if (cartItem.id === action.payload.id) {
          amount -= 1;
        }
        return { ...cartItem, amount };
      });
      return { ...state, cart };
    default:
      throw new Error(`${action.type} is not handled`);
  }
};
