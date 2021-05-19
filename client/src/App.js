import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Test from "./components/test";
import User from "./components/user";
import Ptest from "./components/ptest";
import Etest from "./components/etest";
import ktest from "./components/ktest";
import ptest2 from "./components/ptest2";
import Admin from "./components/admin";
import Adduser from "./components/tempadduser";

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
          <Route path="/sign-up" component={SignUp} />
          <Route path="/test" component={Test} />
          <Route path="/Profile" component={User} />
          <Route path="/ptest" component={Ptest} />
          <Route path="/etest" component={Etest} />
          <Route path="/ktest" component={ktest} />
          <Route path="/ptest2" component={ptest2} />
          <Route path="/addusertemp" component={Adduser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
