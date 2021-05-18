import { React, Component, useState } from "react";
import { Button, ButtonGroup, Fab, TextField } from "@material-ui/core";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Row, Col } from "react-bootstrap";
import "./gg.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
import Axios from "axios";
import Table from "react-bootstrap/Table";
//refactor code- JT
function Ptest() {
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
  const [actionQuery, setActionQuery] = useState({});

  const [conditionValue, setconditionValue] = useState("");
  const [conditioncol, setConditioncol] = useState("");
  const [allstudentlist, setAllStudentlist] = useState([]);


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

  var objectStructure = ["sLogin_ID"];
  
  let deleteConfirm = false;
  const deleteUser = (id) => {
    Axios.delete(`/delete/${id}`).then((response) => {
      // setAllStudentlist(
      //   allstudentlist.filter((val) => {
      //     return val.sLogin_ID != id;
      //   })
      // );
      console.log("success");
    });
    if(deleteConfirm)
    {
      console.log("worked")
    };
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

  const [currentDivID, setCurrentDivID] = useState("");
  const showDiv = (divID) => {
    if(currentDivID !== "" || currentDivID != divID)
    {
      // search div
      if(divID === "searchDiv")
      {
        document.getElementById("addDiv").style.display="none";
        document.getElementById("deleteDiv").style.display="none";
        document.getElementById("updateDiv").style.display="none";
        document.getElementById("queryDiv").style.display="none";
        document.getElementById(divID).style.display="inline";
      }
      else if(divID === "addDiv")
      {
        document.getElementById("searchDiv").style.display="none";
        document.getElementById("deleteDiv").style.display="none";
        document.getElementById("updateDiv").style.display="none";
        document.getElementById("queryDiv").style.display="none";
        document.getElementById(divID).style.display="inline";
      }
      else if(divID === "updateDiv")
      {
        document.getElementById("searchDiv").style.display="none";
        document.getElementById("deleteDiv").style.display="none";
        document.getElementById("addDiv").style.display="none";
        document.getElementById("queryDiv").style.display="none";
        document.getElementById(divID).style.display="inline";
      }
      else if(divID === "deleteDiv")
      {
        document.getElementById("searchDiv").style.display="none";
        document.getElementById("addDiv").style.display="none";
        document.getElementById("updateDiv").style.display="none";
        document.getElementById("queryDiv").style.display="none";
        document.getElementById(divID).style.display="inline";
      }
      else if(divID === "queryDiv")
      {
        document.getElementById("searchDiv").style.display="none";
        document.getElementById("addDiv").style.display="none";
        document.getElementById("updateDiv").style.display="none";
        document.getElementById("deleteDiv").style.display="none";
        document.getElementById(divID).style.display="inline";
      }
      setCurrentDivID(divID);
    }
  };
  return (
    <div>
    <div id = "leftbox" style = {{float:'left', background: "#4c9beb", width:'50%',height:'100%'}}>
      <Tabs className="myClass">
        <TabList>
          <Tab onClick={() => {showDiv("searchDiv");}}>Find User</Tab>
          <Tab onClick={() => {showDiv("addDiv");}}>Add User</Tab>
          <Tab onClick={() => {showDiv("updateDiv");}}>Update User</Tab>
          <Tab onClick={() => {showDiv("deleteDiv");}} style={{ color: "red" }}>Delete User</Tab>
          <Tab onClick={() => {showDiv("queryDiv");}}>Actions</Tab>
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
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={register}
                >
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
                      <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={updateUSer}
                        >
                        Update
                      </button>
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
                    This is the table: {table}, This is the column that we want
                    to change {col}, this is the value that will be used to
                    change the conditional value: {value}
                  </h5>
                  <h5>
                    this is where we want the update to happen:{conditionValue},
                    what column are we trying to update: {conditioncol}
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
                <button
                  style={{backgroundColor: 'red'}}
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => deleteUser(delId)}
                >
                  Delete User
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
                    <h1>{eventKey}</h1>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </TabPanel>
      </Tabs>
    </div>
      <div id = "rightbox" style = {{
        float:'right', 
        background:'white', 
        width:'50%', 
        height:'100%', 
        borderStyle: 'solid', 
        borderColor: 'green', 
        paddingTop: '10px', 
        paddingLeft: '20px',
        paddingRight: '20px',
        overflowY: 'auto'}}>
        <h3>Query Results</h3>
        <div id="searchDiv">
              {studentlist && studentlist.map((student) => {
                return (
                  <Table striped bordered hover size="sm">
                  <thead>
                  <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                  </thead>
                  <tbody key={student.Login_ID} style={{textAlign: 'left'}}>
                    <tr>
                      <td>{student.Login_ID}</td> 
                      <td>{student.First_Name}</td> 
                      <td>{student.Last_Name}</td> 
                      <td>{student.Email}</td>
                    </tr>
                  </tbody>
                  </Table>
                  );
                })}

        </div>
        <div id="deleteDiv">
          delete Test
        </div>
        <div id="addDiv">
          add Test
        </div>
        <div id="updateDiv">
          update Test
        </div>
        <div id="queryDiv">
          query Test
        </div>
      </div>
    </div>
  );
}
export default Ptest;
