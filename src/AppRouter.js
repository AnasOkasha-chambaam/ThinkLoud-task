import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import React from "react";

export default class AppRouter extends React.Component {
  componentDidMount() {
    let rotationValue = 0;
    document.querySelectorAll(".a-strib").forEach((one) => {
      let ttlL = one.getTotalLength();
      one.style.strokeDasharray = ttlL;
      one.style.strokeDashoffset =
        (1 -
          +one.getAttribute("dataamount") /
            one.parentElement.getAttribute("datattl")) *
        ttlL;
      one.style.transformOrigin = "center";
      one.style.transform = `rotate(${rotationValue}deg)`;
      rotationValue +=
        (+one.getAttribute("dataamount") /
          one.parentElement.getAttribute("datattl")) *
        360;
      console.log(
        +one.getAttribute("dataamount") /
          one.parentElement.getAttribute("datattl")
      );
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/add-new-phone" exact component={Add} />
        </Switch>
      </Router>
    );
  }
}
