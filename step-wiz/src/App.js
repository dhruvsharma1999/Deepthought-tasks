import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMultipleForm } from "usetheform";
import FirstPage from "./FirstPage";
import secondPage from "./SecondPage";
import thirdPage from "./ThirdPage";
import fourthPage from "./FourthPage";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/secondform" exact component={FirstPage} />
            <Route path="/thirdpage" exact component={secondPage} />
            <Route path="/fourthpage" exact component={thirdPage} />
            <Route path="/fifthpage" exact component={fourthPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
