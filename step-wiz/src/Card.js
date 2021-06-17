import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  //Reuable card component to on which forms and pages are rendered.
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
