import React from "react";
import { useGlobalContext } from "../../context";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const Cart = () => {
  const { cart } = useGlobalContext();
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        {cart.length === 0 && (
          <h4 className="empty-cart">is currently empty</h4>
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
