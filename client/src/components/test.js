import React from "react";
import { Button, ButtonGroup, Fab, Form, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Buttond from "react-bootstrap/Button";
import RemoveIcon from "@material-ui/icons/Remove";
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
              <h1>hello there this is for forms</h1>
            </div>
            <div className="float-none">{/* this is for removing user */}</div>
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
        <div className="margin:5%;">
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

      <div className="uicontainer">
        <h1>Actions</h1>
        <div>
          <h1> Common Queries</h1>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>Select the student ID with the highest GPA</Button>
            <Button>Show courses that are taken by all students</Button>
            <Button>List all the courses that a student=name has taken</Button>
          </ButtonGroup>

          {/* <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>Select the student ID with the highest GPA</Button>
            <Button>Show courses that are taken by all students</Button>
            <Button>List all the courses that a student=name has taken</Button>
          </ButtonGroup> */}
        </div>
      </div>
    </div>
  );
}
export default test;
