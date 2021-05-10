import { React, Component, useState } from "react";
import { Button, ButtonGroup, Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Buttond from "react-bootstrap/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Row, Col } from "react-bootstrap";
import Formb from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import "./gg.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
import Axios from "axios";

function Admin() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      first: fname,
      lastname: lname,
      password: passwordReg,
      phone: phone,
      email: email,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="">
      <Tabs className="myClass">
        <TabList>
          <Tab>Find User</Tab>
          <Tab>Add User</Tab>
          <Tab>Update User</Tab>
          <Tab style={{ color: "red" }}>Delete User</Tab>
          <Tab>Actions</Tab>
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
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. John"
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Smith"
                    onChange={(e) => {
                      setLname(e.target.value);
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
                      setPasswordReg(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="e.g. jsmith123@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 9097284455"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <Fab color="primary" aria-label="add">
                  <AddIcon onClick={register} />
                </Fab>
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel>
          <form>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <div>
                  <div>
                    <div className="marginleft">
                      <div className="float-left mx-2">
                        <form>
                          <TextField id="standard-basic" label="Value" />
                        </form>
                      </div>
                      <div className="float-left ml-5">
                        <form>
                          <TextField id="standard-basic" label="Update where" />
                        </form>
                      </div>
                    </div>
                    <div className="w-2">
                      <Dropdown as={ButtonGroup}>
                        <Button className="w-5" variant="primary">
                          Update
                        </Button>
                        <Dropdown.Toggle
                          split
                          variant="success"
                          id="dropdown-split-basic"
                          // size={}
                        />
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">User</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Department
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Major</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Offers
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div>
                    {/* <div>
              <Buttond variant="primary"></Buttond>{" "}
            </div> */}
                  </div>
                </div>
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
                <Fab color="primary" aria-label="add">
                  <RemoveIcon />
                </Fab>
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel>
          <form>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <h3>Queries</h3>
                <div className="form-group">
                  <div>
                    <DropdownButton
                      as={ButtonGroup}
                      menuAlign={{ lg: "right" }}
                      title="More Queries"
                      id="dropdown-menu-align-responsive-1"
                    >
                      <Dropdown.Item eventKey="1">
                        Show students who do not have a GPA
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        Select the faculty that advises the most students.
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Show a letter grade every student has in common.
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        Select student ID’s taking least 1 course in the current
                        semester.
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">
                        Select the student ID with the highest GPA.
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="6">
                        Show courses that are taken by all students
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
}
export default Admin;
