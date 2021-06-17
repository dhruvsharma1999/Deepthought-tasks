import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Grossries from "./Components/Grossries/Grossries";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Grossries />
      </main>
    </CartProvider>
  );
}

export default App;
