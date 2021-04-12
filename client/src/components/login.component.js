import React, { Component } from "react";

import { useHistory } from "react-router-dom";
// import Profile from '../pages/forms';
import "../index.css";

function LoginComponent(props) {
  const history = useHistory();
  return (
    <form>
      <div className="auth-wrapper">
          <div className="auth-inner">
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
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

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        onClick={() => {
          history.push("/Profile");
        }}
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
