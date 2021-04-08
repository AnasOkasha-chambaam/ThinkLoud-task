import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import App from "./App";
import Add from "./Add";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/add-new-phone" exact component={Add} />
      </Switch>
    </Router>
  );
}
