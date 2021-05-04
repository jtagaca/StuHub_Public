import React from "react";
import { Button, ButtonGroup, Fab, Form, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Buttond from "react-bootstrap/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Row, Col } from "react-bootstrap";
import Formb from "react-bootstrap/Form";
import "./gg.css";
function test() {
  return (
    <div>
      <div className="uicontainer bgcoloradmin defaultspacing">
        {/* how do we use the classes that are in bootstrap in here like rounded */}
        <div>
          <div className=" float-left spacing1 ">
            {/* should be float left */}
            <div className="float-left  ">
              <h1>New User</h1>
              <Formb>
                <Row>
                  <Col>
                    <Formb.Control placeholder="Student Id" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="First Name" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="Last Name" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="Password" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="Email" />
                  </Col>{" "}
                  <Col>
                    <Formb.Control placeholder="Phone" />
                  </Col>{" "}
                </Row>
              </Formb>
            </div>
            <div className="float-none">
              <h1>Delete User</h1> {/* this is for removing user */}
              <Formb>
                <Row>
                  <Col>
                    <Formb.Control placeholder="Student Id" />
                  </Col>
                </Row>
              </Formb>
            </div>
          </div>
          <div className="float-left  spacing2">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            <div className="float-none">
              <Fab color="primary" aria-label="add">
                <RemoveIcon />
              </Fab>
            </div>
          </div>
        </div>
        <div>
          <h2>Find a User</h2>
          <div className="float-left mx-2">
            <form>
              <TextField id="standard-basic" label="First Name" />
            </form>
          </div>
          <div className="float-left">
            <form>
              <TextField id="standard-basic" label="Last Name" />
            </form>
          </div>
          <div>
            <Button variant="contained" color="primary">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="uicontainer defaultspacing bgcoloradmin">
        <h1>Actions</h1>
        <div>
          <div>
            <div className="float-left mx-2">
              <form>
                <TextField id="standard-basic" label="Value" />
              </form>
            </div>
            <div className="float-left">
              <form>
                <TextField id="standard-basic" label="Update where" />
              </form>
            </div>
            <div>
              <Dropdown as={ButtonGroup}>
                <Button variant="primary">Update</Button>
                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">User</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Department</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Major</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Offers</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
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
            {/* <div>
              <Buttond variant="primary"></Buttond>{" "}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default test;
