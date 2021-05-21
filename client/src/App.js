import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import User from "./components/user";
import Admin from "./components/admin";

import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/admin" component={Admin} />

          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/sign-in" component={Login} />
          <Route path="/Profile" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
