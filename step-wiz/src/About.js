import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
const About = () => {
  // About Component rendering a simple card with information about the application
  return (
    <div>
      <Card className={classes.input}>
        <h1>
          This is a Wizard form example, this example does not have form
          validation, the main example potrays the usage of Router
        </h1>
      </Card>
      <Card className={classes.input}>
        <Link to="/">
          <Button type="submit">Go To Home</Button>
        </Link>
      </Card>{" "}
    </div>
  );
};

export default About;
