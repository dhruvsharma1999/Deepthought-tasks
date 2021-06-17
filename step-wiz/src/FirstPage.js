import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";
import { Form, Input } from "usetheform";
import MoveNav from "./MoveNav";
import { Link } from "react-router-dom";

const FirstPage = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <Form name="page2" {...props}>
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            type="email"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </Form>
      </Card>
      <Card className={classes.input}>
        <Link to="/">
          <Button type="submit" onSubmit={props.prevPage}>
            Previous
          </Button>
        </Link>
        <Link to="/thirdpage">
          <Button type="submit" onSubmit={props.onSubmit}>
            Next
          </Button>
        </Link>
      </Card>{" "}
    </div>
  );
};

export default FirstPage;
