import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const FirstPage = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(""); //State to trigger onchange event on the input feild of the form

  const usernameChangeHandler = (event) => {
    //event handler to handle the onchange event of the user.
    setEnteredUsername(event.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form name="page2" {...props}>
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            type="email"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </form>
      </Card>
      <Card className={classes.input}>
        {/* Previous button setting the link to / which renders the Home compoenent */}
        <Link to="/">
          <Button type="submit" onSubmit={props.prevPage}>
            Previous
          </Button>
        </Link>
        {/* Next button setting the link to /thirdpage which renders the Secong Page component */}
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
