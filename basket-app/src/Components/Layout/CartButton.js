import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import cartContext from "../../store/CartContext";

const CartButton = (props) => {
  const cartCtx = useContext(cartContext);
  const numCartItem = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numCartItem}</span>
    </button>
  );
};

export default CartButton;
