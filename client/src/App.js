import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Test from "./components/test";
import User from "./components/user";
import Ptest from "./components/ptest";
import etest from "./components/etest";
import ktest from "./components/ktest";
import ptest2 from "./components/ptest2";
import Admin from "./components/admin";
import Adduser from "./components/tempadduser";

import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              StuHuB
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/test"}>
                    test
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Profile"}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/ptest"}>
                    ptest
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/etest"}>
                    etest
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/ktest"}>
                    ktest
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/ptest2"}>
                    ptest2
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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
          <Route path="/etest" component={etest} />
          <Route path="/ktest" component={ktest} />
          <Route path="/ptest2" component={ptest2} />
          <Route path="/addusertemp" component={Adduser} />

          {/* <Route path="/Profile" component={} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
