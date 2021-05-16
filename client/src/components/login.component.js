import React, { Component, useState } from "react";

import { useHistory } from "react-router-dom";
import Axios from "axios";
// import Profile from '../pages/forms';
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

  return (
    <form>
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
            onClick={login}
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
