import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";
import { Form, Input } from "usetheform";
import { Link } from "react-router-dom";

const SecondPage = (props) => {
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
      <Card className={classes.input}>
        <Form {...props}>
          <label htmlFor="email">Age</label>
          <select
            name="selectList"
            id="selectList"
            className={classes.dropdown}
          >
              <option value="option 1">Select Age Range</option> {" "}
            <option value="option 2">17 and Under</option>
            <option value="option 2">18-24</option>
            <option value="option 2">25-35</option>
            <option value="option 2">36-45</option>
          </select>
          <label htmlFor="firstname">Height (ft):</label>
          <input
            id="firstname"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="lastname">Height (in):</label>
          <input
            id="lastname"
            type="text"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <label htmlFor="lastname">Weight:</label>
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
          <Button type="submit" onSubmit={props.prevPage}>
            Previous
          </Button>
        </Link>
        <Link to="/fourthpage">
          <Button type="submit" onSubmit={props.onSubmit}>
            Next
          </Button>
        </Link>
      </Card>{" "}
    </div>
  );
};

export default SecondPage;
