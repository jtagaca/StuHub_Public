import { React, Component } from "react";
import { Button, ButtonGroup, Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Buttond from "react-bootstrap/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Row, Col } from "react-bootstrap";
import Formb from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import "./gg.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../index.css";

function ptest() {
  return (
    <div style={{position: 'absolute', top: 64}}>
    <Tabs>
        <TabList>
            <Tab>Find User</Tab>
            <Tab>Add User</Tab>
            <Tab>Update User</Tab>
            <Tab style={{color: 'red'}}>Delete User</Tab>
        </TabList>
        <TabPanel>
          <form>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <h3>Enter User ID</h3>

                <div className="form-group">
                  <label>User ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 100001"
                  />
                </div>
                <h3> or... </h3>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. John"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Smith"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Search
                </button>
              </div>
            </div>
                </form>
        </TabPanel>
        <TabPanel>
        <form>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <h3>Enter New User Profile</h3>

              <div className="form-group">
                <label>User ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 100001"
                />
              </div>

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. John"
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Smith"
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
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="e.g. jsmith123@gmail.com"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 9097284455"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add User
              </button>
            </div>
          </div>
        </form>
        </TabPanel>
        <TabPanel>
          <form>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <h3>Enter User ID to Update</h3>

                <div className="form-group">
                  <label>User ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 100001"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Update User
                </button>
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel>
        <form>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <h3>Enter User ID to Delete</h3>

                <div className="form-group">
                  <label>Student ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 100001"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block" style={{backgroundColor:'red'}}>
                  Delete User
                </button>
              </div>
            </div>
          </form>
        </TabPanel>
    </Tabs>
    </div>
  );
}
export default ptest;


