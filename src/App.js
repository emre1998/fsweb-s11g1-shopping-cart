import React, { useState } from "react";
import {BrowserRouter as Router,Route } from "react-router-dom";
import { data } from "./data";
import ProductContext from './context/ProductContext';
import CartContext from "./context/CartContext";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    setCart([...cart, product]);
    // verilen itemi sepete ekleyin
  };

  return (
    <Router>
      <CartContext.Provider value={{ cart }}>
        <ProductContext.Provider value={{ products, addItem }}>
          <div className="App">
            <Navigation />
            <main className="content">
              <Route exact path="/" component={Products} />
              <Route path="/cart" component={ShoppingCart} />
            </main>
          </div>
        </ProductContext.Provider>
      </CartContext.Provider>
    </Router>
  );
  
}

export default App;
