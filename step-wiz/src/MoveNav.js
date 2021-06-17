import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";

const MoveNav = (props) => {
  return (
    <div className={classes.input}>
      <Card className={classes.input}>
        <Button type="submit" onSubmit={props.prevPage}>
          Previous
        </Button>
        <Button type="submit" onSubmit={props.onSubmit}>
          Next
        </Button>
      </Card>
    </div>
  );
};

export default MoveNav;
