import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const FourthPage = (props) => {
  //
  return (
    <div>
      <Card className={classes.input}>
        <h1>Sucess!</h1>
      </Card>
      <Card className={classes.input}>
        <Link to="/fourthpage">
          <Button type="submit">Previous</Button>
        </Link>
      </Card>{" "}
    </div>
  );
};

export default FourthPage;
