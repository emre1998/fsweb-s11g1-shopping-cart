import React, {useContext,useState} from "react";
import { ScCartCheckout } from "./scParts";
import CartContext from "../context/CartContext";
// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const {cart}= useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, item) => {
        return acc + item.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
