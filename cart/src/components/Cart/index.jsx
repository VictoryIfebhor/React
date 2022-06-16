import React from "react";
import { useGlobalContext } from "../../context";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const Cart = () => {
  const { cart, isError } = useGlobalContext();
  const message = isError
    ? "Couldn't fetch data from server"
    : "is currently empty";

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        {cart.length === 0 && (
          <h4 className={`message ${isError && "failed-fetch"}`}>{message}</h4>
        )}
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <CartFooter />
    </section>
  );
};

export default Cart;
