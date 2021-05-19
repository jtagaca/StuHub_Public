import { React, Component, useState } from "react";
import { Button, ButtonGroup, Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Buttond from "react-bootstrap/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Row, Col, Table } from "react-bootstrap";
import Formb from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import "./gg.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
import styled from "styled-components";
import Modal from "./Modal";
import Axios from "axios";
import Result from "./result.js";
import OpenModalButton from "./OpenModalButton";

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
`;
//refactor code- JT
function Admin() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventKey, setEventKey] = useState(0);

  const [lID, setld] = useState("");
  const [delId, setDeleteid] = useState("");
  // let arrTable = ["User", "Department", "Major", "Courses", "Student"];
  const [value, setValue] = useState("");
  const [col, setCol] = useState("");
  const [table, setTable] = useState("");
  const [arrCol, setArrcol] = useState([]);
  const [actionQuery, setActionQuery] = useState([]);
  const [allstudentlist, setAllStudentlist] = useState([]);

  const [conditionValue, setconditionValue] = useState("");
  const [conditioncol, setConditioncol] = useState("");

  const [isOpen, toggle] = useState(false);

  function handlOpenModal(open) {
    searchUser();
    toggle(open);
  }
  const handleSelect = (e) => {
    console.log(e);
    setTable(e);
    Axios.get("/col", {
      params: { table: table },
    })
      .then((response) => {
        console.log(response.data);
        setArrcol(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllUsers = () => {
    Axios.get("/studentUser", {})
      .then((response) => {
        setAllStudentlist(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputValidation = () => {
    if (usernameReg.length > 6 && passwordReg.length > 7 && phone.length > 5) {
      register();
    } else {
      alert(
        "Username or Password or Phone does not adhear to our Security Policy"
      );
    }
  };
  const handleClear = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  var objectStructure = ["sLogin_ID"];
  const deleteUser = (id) => {
    Axios.delete(`/delete/${id}`)
      .then((response) => {
        console.log("gg");
        debugger;
        getAllUsers();
      })
      .then((response) => {
        setAllStudentlist(
          allstudentlist.filter((val) => {
            return val.sLogin_ID != id;
          })
        );
      });
  };

  // var idcounter = 0;
  const QuerySelect = (h) => {
    setEventKey(h);
    Axios.get("/query", {
      params: { eventKey: eventKey },
    })
      .then((response) => {
        console.log(response.data);
        setActionQuery(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const register = () => {
    Axios.post("/register", {
      username: usernameReg,
      first: fname,
      lastname: lname,
      password: passwordReg,
      phone: phone,
      email: email,
    })

      .then((response) => {
        console.log(usernameReg);

        alert("User was added successfully");
        handleClear();
      })
      .catch((err) => {
        alert("Please make sure to fill all the input boxes");
      });
  };
  const [studentlist, setStudentList] = useState();
  const searchUser = () => {
    Axios.get("/getuser", {
      params: { LoginID: lID },
    })
      .then((response) => {
        setStudentList(response.data); //error here
        // console.log(fname);
        // console.log(studentlist);
      })
      .catch((err) => {
        console.log(err);
      });
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
    <div>
      <div>
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

                  {/* <h1>{studentlist}</h1> */}
                  {/* <Result student={studentlist} /> */}
                </div>
              </div>
            </form>

            <OpenModalButton handlClick={() => handlOpenModal(true)}>
              Open modal
            </OpenModalButton>
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
                    <AddIcon onClick={inputValidation} />
                  </Fab>
                  <Button onClick={handleClear}>clear</Button>
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
                        <Dropdown.Item eventKey="Student">
                          Student
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Course">Course</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="Major">Major</Dropdown.Item>
                      </DropdownButton>
                      <DropdownButton
                        alignRight
                        title="Column"
                        id="dropdown-menu-align-right"
                        onSelect={(g) => setCol(g)}
                      >
                        {arrCol &&
                          arrCol.map((tb) => {
                            return (
                              <Dropdown.Item
                                key={tb.COLUMN_NAME}
                                eventKey={tb.COLUMN_NAME}
                              >
                                {tb.COLUMN_NAME}
                              </Dropdown.Item>
                            );
                          })}
                      </DropdownButton>
                      {/* <h4>You selected {col}</h4> */}
                      <DropdownButton
                        alignRight
                        title="Condition Column"
                        id="dropdown-menu-align-right"
                        onSelect={(g) => setConditioncol(g)}
                      >
                        {arrCol &&
                          arrCol.map((tb) => {
                            return (
                              <Dropdown.Item
                                key={tb.COLUMN_NAME}
                                eventKey={tb.COLUMN_NAME}
                              >
                                {tb.COLUMN_NAME}
                              </Dropdown.Item>
                            );
                          })}
                      </DropdownButton>
                    </div>

                    <h5>
                      {" "}
                      This is the table: {table}, This is the column that we
                      want to change {col}, this is the value that will be used
                      to change the conditional value: {value}
                    </h5>
                    <h5>
                      this is where we want the update to happen:
                      {conditionValue}, what column are we trying to update:{" "}
                      {conditioncol}
                    </h5>
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

                  <button
                    type="button"
                    class="btn btn-demo"
                    data-toggle="modal"
                    data-target="#myModal2"
                  >
                    Right Sidebar Modal
                  </button>
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
                        onSelect={QuerySelect}
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
                          Select student ID’s taking least 1 course in the
                          current semester.
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                          Select the student ID with the highest GPA.
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="6">
                          Show courses that are taken by all students
                        </Dropdown.Item>
                      </DropdownButton>
                      <h1>{eventKey}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </TabPanel>
        </Tabs>
      </div>
      <div
        id="rightbox"
        style={{
          float: "right",
          background: "white",
          width: "50%",
          height: "100%",
        }}
      >
        <h3>Query Results</h3>

        {actionQuery.length == 0 ? (
          <h1>Empty Result</h1>
        ) : (
          actionQuery &&
          actionQuery.map((student) => {
            console.log(student);
            return (
              <div key={student.Login_ID} style={{ textAlign: "left" }}>
                {student.sLogin_ID ? <h1>{student.sLogin_ID}</h1> : <div></div>}

                {student.Address ? (
                  <div>
                    {/* <h1>{student.sLogin_ID}</h1> */}
                    <h1>{student.Address}</h1>
                  </div>
                ) : (
                  <div></div>
                )}

                {student.Login_ID ? (
                  <div>
                    s{/* <h1>{student.sLogin_ID}</h1> */}
                    <h1>{student.Login_ID}</h1>
                  </div>
                ) : (
                  <div></div>
                )}
                {student.First_Name ? (
                  <div>
                    {/* <h1>{student.sLogin_ID}</h1> */}
                    <h1>{student.First_Name}</h1>
                  </div>
                ) : (
                  <div></div>
                )}

                {student.Last_Name ? (
                  <div>
                    {/* <h1>{student.sLogin_ID}</h1> */}
                    <h1>{student.Last_Name}</h1>
                  </div>
                ) : (
                  <div></div>
                )}

                {student.Email ? (
                  <div>
                    {/* <h1>{student.sLogin_ID}</h1> */}
                    <h1>{student.Email}</h1>
                  </div>
                ) : (
                  <div></div>
                )}
                {student.Phone ? (
                  <div>
                    {/* <h1>{student.sLogin_ID}</h1> */}
                    <h1>{student.Phone}</h1>
                  </div>
                ) : (
                  <div></div>
                )}
                {student.OverallGPA ? (
                  <div>
                    {/* <h1>{student.sLogin_ID}</h1> */}
                    <h1>{student.OverallGPA}</h1>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })
        )}
      </div>

      <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
        <h1>Query Result</h1>

        <ModalContent>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Email</th>
              </tr>
            </thead>

            {studentlist &&
              studentlist.map((student) => {
                return (
                  <tbody key={student.Login_ID} style={{ textAlign: "left" }}>
                    <tr>
                      <td>
                        {student.First_Name} {student.Last_Name}
                      </td>
                      <td>{student.Login_ID}</td>
                      <td>{student.Email}</td>
                    </tr>
                  </tbody>
                );
              })}
          </Table>
        </ModalContent>
      </Modal>

      <div
        class="modal right fade"
        id="myModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel2">
                Right Sidebar
              </h4>
            </div>

            <div class="modal-body">
              {allstudentlist &&
                allstudentlist.map((student) => {
                  return (
                    <tbody key={student.Login_ID} style={{ textAlign: "left" }}>
                      <tr>
                        <td>
                          {student.First_Name} {student.Last_Name}
                        </td>
                        <td>{student.Login_ID}</td>
                        <td>{student.Email}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
export default Admin;
