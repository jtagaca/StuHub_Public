import { React, Component, useState, useEffect } from "react";
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
import { useHistory, Link } from "react-router-dom";

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
  let history = useHistory();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventKey, setEventKey] = useState(0);

  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    history.push("/");
  };

  const [lID, setld] = useState("");
  const [delId, setDeleteid] = useState("");
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

  useEffect(() => {
    getAllUsers();
  }, []);
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
        getAllUsers();
      })
      .then((response) => {
        setAllStudentlist(
          allstudentlist.filter((val) => {
            return val.sLogin_ID != id;
          })
        );

        handleClear();
      });
  };
  const confirmation = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Save it!
      deleteUser(id);
    } else {
      // Do nothing!
      console.log("Thing was not saved to the database.");
    }
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

  //input validation for add user
  const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regInt = /\d/;
  const regChar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  const regLetter = /[a-zA-Z]/;

  const inputValidation = () => {
    //userID validator
    if (usernameReg.length === 0) {
      alert("Invalid User ID. Field cannot be empty.");
      return;
    } else if (regLetter.test(usernameReg) || parseInt(usernameReg) < 1) {
      alert("Invalid User ID. Field can only contain positive integers.");
      return;
    }
    //first and last name validator
    if (fname.length === 0 || lname.length === 0) {
      alert("Invalid First or Last Name. Fields cannot be empty.");
      return;
    } else if (
      regInt.test(fname) ||
      regInt.test(lname) ||
      regChar.test(fname) ||
      regChar.test(lname)
    ) {
      alert(
        "Invalid First or Last Name. First and last names cannot contain numbers or special characters."
      );
      return;
    }
    //password validator
    if (!regPassword.test(passwordReg)) {
      alert(
        "Invalid Password. Your password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, a number, and a special character."
      );
      return;
    }
    //email validator
    if (email.length === 0) {
      alert("Invalid Email. Field cannot be empty.");
      return;
    } else if (!regEmail.test(email)) {
      alert("Invalid Email");
      return;
    }
    //phone validator
    if (phone.length !== 10 || regChar.test(phone) || regLetter.test(phone)) {
      alert(
        "Invalid Phone Number. Phone numbers cannot contain letters or special characters."
      );
      return;
    }
    register();
  };

  //find user validator
  const findUserValidation = () => {
    if (lID.length === 0) {
      alert("Invalid User ID. Field cannot be empty");
      return;
    } else if (regLetter.test(lID) || parseInt(lID) < 1) {
      alert("Invalid User ID. Field can only contain positive integers");
      return;
    }
    handlOpenModal(true);
  };

  //delete user validation
  const deleteUserValidation = () => {
    if (delId.length === 0) {
      alert("Invalid User ID. Field cannot be empty");
      return;
    } else if (regLetter.test(delId) || parseInt(delId) < 1) {
      alert("Invalid User ID. Field can only contain positive integers");
      return;
    }
    confirmation(delId);
  };
  return (
    <div className="admin">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand">StuHuB</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
              <div className="admin-wrapper">
                <div className="admin-inner">
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

            <OpenModalButton
              className="btn btn-primary "
              handlClick={() => findUserValidation()}
            >
              Find
            </OpenModalButton>
          </TabPanel>
          <TabPanel>
            <form>
              <div className="admin-wrapper">
                <div className="admin-inner">
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
                  <Button
                    className="float-end customButton "
                    onClick={handleClear}
                    variant="primary"
                  >
                    Clear
                  </Button>{" "}
                </div>
              </div>
            </form>
          </TabPanel>
          <TabPanel>
            <form>
              <div className="admin-wrapper">
                <div className="admin-inner">
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
                      <div className="">
                        <div className="float-start">
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
                            <Dropdown.Item eventKey="Course">
                              Course
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Major">
                              Major
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                        <div className="float-start">
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
                        </div>
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
                    </div>
                    <div>
                      <h5>Selected table: {table}</h5>
                      <h5>
                        Selected Column:
                        {col}
                      </h5>

                      <h5>
                        Selected Conditional Column:
                        {conditioncol}
                      </h5>
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
              <div className="admin-wrapper">
                <div className="admin-inner">
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
                    // onClick={() => deleteUser(delId)}
                    onClick={() => deleteUserValidation()}
                  >
                    <RemoveIcon />
                  </Fab>

                  <button
                    type="button"
                    class="btn btn-demo"
                    data-toggle="modal"
                    data-target="#myModal2"
                  >
                    Show Students
                  </button>
                </div>
              </div>
            </form>
          </TabPanel>
          <TabPanel>
            <form>
              <div className="admin-wrapper">
                <div className="admin-inner">
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
                  <button
                    type="button"
                    class="btn btn-demo"
                    data-toggle="modal"
                    data-target="#myModal3"
                  >
                    Show Students
                  </button>
                </div>
              </div>
            </form>
          </TabPanel>
        </Tabs>
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
        class="modal "
        id="myModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel2">
                Students
              </h4>
            </div>

            <div class="modal-body">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Email</th>
                  </tr>
                </thead>
                {allstudentlist &&
                  allstudentlist.map((student) => {
                    return (
                      <tbody
                        key={student.Login_ID}
                        style={{ textAlign: "left" }}
                      >
                        <tr>
                          <td>
                            {student.First_Name} {student.Last_Name}
                          </td>
                          <td>{student.Login_ID}</td>
                          <td>{student.email}</td>
                        </tr>
                      </tbody>
                    );
                  })}
              </Table>
            </div>
          </div>
        </div>
      </div>

      {/* not working float */}

      <div
        class="modal "
        id="myModal3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel2">
                Students
              </h4>
            </div>

            <div class="modal-body">
              {actionQuery.length == 0 ? (
                <h1>Empty Result</h1>
              ) : (
                actionQuery &&
                actionQuery.map((student) => {
                  console.log(student);
                  return (
                    <div key={student.Login_ID} style={{ textAlign: "left" }}>
                      {student.sLogin_ID ? (
                        <h1>{student.sLogin_ID}</h1>
                      ) : (
                        <div></div>
                      )}

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
                          {/* <h1>{student.sLogin_ID}</h1> */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admin;
