import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Home.module.css";
import { Form, Input } from "usetheform";
import { Link } from "react-router-dom";

const thirdPage = (props) => {
  return (
    <div>
      <Card className={classes.input}>
        <Form {...props}>
          <label htmlFor="email">Select Color</label>
          <select
            name="selectList"
            id="selectList"
            className={classes.dropdown}
          >
              <option value="option 1">Select</option> {" "}
            <option value="option 2">Red</option>
            <option value="option 2">Blue</option>
            <option value="option 2">green</option>
            <option value="option 2">yello</option>
          </select>
        </Form>
      </Card>
      <Card className={classes.input}>
        <Link to="/thirdpage">
          <Button type="submit">Previous</Button>
        </Link>
        <Link to="/fifthpage">
          <Button type="submit">Next</Button>
        </Link>
      </Card>{" "}
    </div>
  );
};

export default thirdPage;
