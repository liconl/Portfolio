import React from "react";
import { softShadows } from "drei";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import "./App.scss";

softShadows();

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
