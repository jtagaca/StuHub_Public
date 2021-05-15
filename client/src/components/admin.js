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
import Result from "./result.js";

//refactor code- JT
function Admin() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [lID, setld] = useState("");
  const [delId, setDeleteid] = useState("");

  let arrTable = ["User", "Department"];
  const [value, setValue] = useState("kkkk");

  const [col, setCol] = useState("Last_Name");
  const [table, setTable] = useState("");

  const [conditionValue, setconditionValue] = useState("6532");
  const [conditioncol, setConditioncol] = useState("Login_ID");

  const [allstudentlist, setAllStudentlist] = useState([]);

  // const

  const handleSelect = (e) => {
    // console.log("hello");
    setTable(e);
    console.log(table);
  };

  const deleteUser = (id) => {
    Axios.delete(`/delete/${id}`).then((response) => {
      // setAllStudentlist(
      //   allstudentlist.filter((val) => {
      //     return val.sLogin_ID != id;
      //   })
      // );
      console.log("success");
    });
  };

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

  const [studentlist, setStudentList] = useState();

  const searchUser = () => {
    Axios.get("/getuser", {
      params: { LoginID: lID },
    })
      .then((response) => {
        console.log("I'm in here");
        console.log(response);
        setStudentList(response.data); //error here
        // console.log(fname);
        // console.log(studentlist);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const alert = () => {
    console.log(table);
  };
  const updateUSer = () => {
    Axios.put("/update", {
      conditionValue: conditionValue,
      conditioncol: conditioncol,
      updateval: value,
      table: table,
      col: col,
    }).then((response) => {
      console.log("success");
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
                    onChange={(e) => {
                      setld(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={searchUser}
                >
                  Search
                </button>
                {/* <h1>{studentlist}</h1> */}
                {/* <Result student={studentlist} /> */}
              </div>
              {studentlist &&
                studentlist.map((student) => {
                  return (
                    <div key={student.Login_ID}>
                      <h1>{student.First_Name}</h1>
                      <h1>{student.Last_Name}</h1>
                      <h1>{student.Login_ID}</h1>
                      <h1>{student.Email}</h1>
                    </div>
                  );
                })}
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
                          <TextField
                            id="standard-basic"
                            label="Value"
                            onChange={(e) => {
                              setValue(e.target.value);
                            }}
                          />
                        </form>
                      </div>
                      <div className="float-left ml-5">
                        <form>
                          <TextField
                            id="standard-basic"
                            label="Update conditionValue"
                            onChange={(e) => {
                              setconditionValue(e.target.value);
                            }}
                          />
                        </form>
                      </div>
                    </div>
                    <div className="w-2">
                      <div>
                        <Button onClick={alert}>hello</Button>
                      </div>

                      <Button
                        className="w-5"
                        variant="primary
                        
                        "
                        // onClick={updateUSer}
                        onClick={updateUSer}
                      >
                        Update
                      </Button>
                    </div>

                    <DropdownButton
                      alignRight
                      title="Tables"
                      id="dropdown-menu-align-right"
                      onSelect={handleSelect}
                    >
                      <Dropdown.Item eventKey="User">User</Dropdown.Item>
                      <Dropdown.Item eventKey="Department">
                        Department
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Student">Student</Dropdown.Item>
                      <Dropdown.Item eventKey="Course">Course</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="Major">Major</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                      alignRight
                      title="Tables"
                      id="dropdown-menu-align-right"
                      onSelect={handleSelect}
                    >
                      {/* {for(let i=0; i< arrTable.length; {
                        <Dropdown.Item eventKey="{ arrTable[i]}">User</Dropdown.Item>

                      }} */}

                      <Dropdown.Item eventKey="User">User</Dropdown.Item>
                      <Dropdown.Item eventKey="Department">
                        Department
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Student">Student</Dropdown.Item>
                      <Dropdown.Item eventKey="Course">Course</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="Major">Major</Dropdown.Item>
                    </DropdownButton>
                    {/* <h4>You selected {value}</h4> */}
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
                    onChange={(e) => {
                      setDeleteid(e.target.value);
                    }}
                  />
                </div>
                <Fab
                  color="primary"
                  aria-label="add"
                  onClick={() => deleteUser(delId)}
                >
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
