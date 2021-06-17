import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./App.css";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h2>Wizard App</h2>
      </Link>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
