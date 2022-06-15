import React, { useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    if (amount <= 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    }
  });

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: { id } })
          }
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch({ type: "INCREASE_CART_ITEM_COUNT", payload: { id } })
          }
        >
          <FaChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() =>
            dispatch({ type: "DECREASE_CART_ITEM_COUNT", payload: { id } })
          }
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
