import React, { Component, useState } from "react";

import { useHistory } from "react-router-dom";
import Axios from "axios";
// import Profile from '../pages/forms';
import { Link } from "react-router-dom";

import "../index.css";

function LoginComponent(props) {
  // const
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const history = useHistory();

  const login = () => {
    Axios.post("/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log("dhkja");
      if (response.data.message) {
        console.log(response.data);
        // console.log(loginStatus);
      } else {
        // setLoginStatus(response.data[0].username);
        console.log("I'm in here");
        history.push("/main");
      }
    });
  };
  //login validator
  const loginValidate = () => {
    if (username.length === 0) {
      alert("Username cannot be empty.");
      return;
    }
    if (password.length === 0) {
      alert("Password cannot be empty.");
      return;
    }
    login();
  };

  return (
    <form>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand fs-1">StuHuB</Link>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
          ></div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Login ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Login ID"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            onClick={loginValidate}
            type="button"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginComponent;
