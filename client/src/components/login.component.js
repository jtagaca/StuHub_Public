import React, { Component, useState } from "react";

import { useHistory } from "react-router-dom";
import Axios from "axios";
// import Profile from '../pages/forms';
import "../index.css";

function LoginComponent(props) {
  // const
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,

      // }).then((response) => {
      //   if (response.data.message) {
      //     setLoginStatus(response.data.message);
      //   } else {
      //     setLoginStatus(response.data[0].username);
      //   }
    });
    history.push("/main ");
  };
  const history = useHistory();
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
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button
            onClick={login}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginComponent;
