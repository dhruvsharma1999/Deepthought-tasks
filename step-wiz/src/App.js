import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMultipleForm } from "usetheform";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav></Nav>
          <Switch>
            {/* rendering Home component when route matches / */}
            <Route path="/" exact component={Home} />
            {/* rendering About component when route matches /about */}
            <Route path="/about" exact component={About} />
            {/* rendering FirstPage component when route matches /secondform */}
            <Route path="/secondform" exact component={FirstPage} />
            {/* rendering SecondPage component when route matches /thirdpage */}
            <Route path="/thirdpage" exact component={SecondPage} />
            {/* rendering ThirdPage component when route matches /fourthpage */}
            <Route path="/fourthpage" exact component={ThirdPage} />
            {/* rendering Fourth component when route matches /fifthpage */}
            <Route path="/fifthpage" exact component={FourthPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
