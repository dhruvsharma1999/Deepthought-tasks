import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  //Button Component to pass to each page takeing onclick prop for click handeling
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
