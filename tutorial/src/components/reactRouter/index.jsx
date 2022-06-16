import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Home from "./Home";
import Navbar from "./Navbar";
import Items from "./Items";
import SingleItem from "./SingleItem";

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items">
          <Items />
        </Route>
        <Route exact path="/items/:id">
          <SingleItem />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;
