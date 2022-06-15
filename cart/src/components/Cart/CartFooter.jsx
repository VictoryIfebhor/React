import React from "react";
import { useGlobalContext } from "../../context";

const CartFooter = () => {
  const { cart, dispatch } = useGlobalContext();

  const total = cart.reduce((acc, { price, amount }) => {
    acc += price * amount;
    // adding Number.EPSILON improves accuracy
    return Math.round((acc + Number.EPSILON) * 100) / 100;
  }, 0);

  return (
    <footer>
      <hr />
      <div className="cart-total">
        <h4>
          total <span>${total}</span>
        </h4>
      </div>
      <button
        className="btn clear-btn"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        clear cart
      </button>
    </footer>
  );
};

export default CartFooter;
