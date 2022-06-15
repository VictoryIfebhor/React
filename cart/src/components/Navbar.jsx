import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { cart } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>Cart</h3>
        <div className="nav-container">
          <div className="icon-container">
            <FaShoppingBag />
          </div>
          <div className="amount-container">
            <p className="total-amount">{cart.length}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
