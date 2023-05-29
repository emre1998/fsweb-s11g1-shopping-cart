import { createContext,useContext,useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useContext(CartContext)
  
    const addItem = (item) => {
      setCart([...cart, item]);
    };
  
    const removeItem = (itemId) => {
      setCart(cart.filter((item) => item.id !== itemId));
    };
  
    return (
      <CartContext.Provider value={{ cart, addItem, removeItem }}>
        {children}
      </CartContext.Provider>
    );
  };

export default CartContext;
