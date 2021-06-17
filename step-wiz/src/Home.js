import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";
import { Form, Input } from "usetheform";
import FirstPage from "./FirstPage";
import MoveNav from "./MoveNav";

const Home = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <Card name="page1" {...props} className={classes.input}>
        <Form onSubmit={addUserHandler}>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </Form>
      </Card>

      <Card className={classes.input}>
        <Link to="/secondform">
          <Button type="submit" onSubmit={props.onSubmit}>
            Next
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;
