import React, { useContext } from "react";
import classes from "./GrossriesItem.module.css";
import AddGrossriesForm from "./AddGrossriesForm";
import cartContext from "../../store/CartContext";

const GrossriesItem = (props) => {
  const cartCtx = useContext(cartContext);

  const price = `${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <AddGrossriesForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default GrossriesItem;
