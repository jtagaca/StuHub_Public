import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Buttond from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./component.scss";
import { useState, useEffect } from "react";
import Axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import Clock from "react-live-clock";
import { useReactToPrint } from "react-to-print";
import ReactToPrint from "react-to-print";

import "./gg.css";
import Table from "react-bootstrap/Table";

import Pdf from "react-to-pdf";
import { Dropdown } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

function User(props) {
  //hooks here
  const [coursesTaken, setCoursesTaken] = useState([]);
  const [ownGPA, setOwnGPA] = useState();
  const [coursesAv, setCoursesAv] = useState([]);
  const [studentfname, setStudentfname] = useState("");
  const [lname, setStudentlname] = useState("");
  const [id, setStudentID] = useState("");
  const [depID, setDepID] = useState("");
  const componentRef1 = useRef();
  const componentRef2 = useRef();
  const componentRef3 = useRef();

  useEffect(() => {
    console.log("in");
    Axios.get("/getStudentinfo").then((response) => {
      console.log(response.data[0].First_Name);
      setStudentfname(response.data[0].First_Name);
      setStudentlname(response.data[0].Last_Name);
      setStudentID(response.data[0].Login_ID);
    });
  }, []);

  const QueryViewCoursesTaken = () => {
    Axios.get("/getStuCourses", {
      params: { LoginID: id },
    })
      .then((response) => {
        console.log(response.data);
        setCoursesTaken(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const QueryViewGPA = () => {
    Axios.get("/getOwnGPA", {
      params: { LoginID: id },
    })
      .then((response) => {
        console.log(response.data);
        setOwnGPA(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const QueryViewCoursesAv = () => {
    Axios.get("/getAllCourses", {
      params: { LoginID: id },
    })
      .then((response) => {
        console.log(response.data);
        setCoursesAv(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDropDown = (e) => {
    console.log(e);
    setDepID(e);
    Axios.get("getSpecificCourse", {
      params: { depID: depID },
    })
      .then((response) => {
        console.log(response.data);
        setCoursesAv(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var ReactFitText = require("react-fittext");
  return (
    <div>
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
      <div class="row"></div>
      <div className="float-start my-0">
        <div className="cloud front">
          <span className="left-front"></span>

          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
      <div>
        <div className="circle-wrapper">
          <div className="warning circle"></div>
          <div className="icon">
            <i classname="fa fa-exclamation"></i>
          </div>
        </div>
      </div>
      <div className="uicontainer container-fluid py-2 mt-5">
        <Row>
          <Col lg={12}>
            <h1>
              <Clock format={"h:mm:ssa"} interval={1000} ticking={true} />
            </h1>
          </Col>
        </Row>

        <div className="mx-5">
          <Row className="container-fluid mx-0 animate-271724">
            <Col lg={6} className="border bordercolor ">
              <h1>Welcome</h1>
              <h2>
                {studentfname} {lname}{" "}
              </h2>
            </Col>

            <Col lg={6} className="border bordercolor">
              <div>
                <h1>To the University of CSA, Bakersfield</h1>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-4">
          <div className="borderhello bordercolor">
            <div className="col align-items-center">
              <h1 className="animate-801856">Hello there</h1>
            </div>

            <div>
              <Row>
                <Col xl={12} className="border">
                  <h1>Student ID: {id}</h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-md">
                <div class="modal-content" ref={componentRef1}>
                  <div>
                    <div class="modal-header">
                      <h1>Course History</h1>
                    </div>
                    <div class="modal-body">
                      <p style={{ textAlign: "center", fontWeight: "bold" }}>
                        *WIP = Work in Progress
                      </p>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>CRN</th>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Term</th>
                            <th>Grade</th>
                          </tr>
                        </thead>

                        {coursesTaken &&
                          coursesTaken.map((student) => {
                            return (
                              <tbody
                                key={student.Login_ID}
                                style={{ textAlign: "left" }}
                              >
                                <tr>
                                  <td>{student.CRN}</td>
                                  <td>{student.Course_ID}</td>
                                  <td>{student.Course_Name}</td>
                                  <td>{student.Term}</td>
                                  {student.Grade ? (
                                    <td>{student.Grade}</td>
                                  ) : (
                                    <td>WIP</td>
                                  )}
                                </tr>
                              </tbody>
                            );
                          })}
                      </Table>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <div className="col align-items-center">
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        value="Close"
                      >
                        Exit
                      </button>
                      <ReactToPrint
                        trigger={() => <button>Print</button>}
                        content={() => componentRef1.current}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="modal fade" id="secondModal">
              <div class="modal-dialog modal-sm">
                <div class="modal-content" ref={componentRef2}>
                  <div class="modal-header">
                    <h1>GPA</h1>
                  </div>
                  <div class="modal-body">
                    {ownGPA &&
                      ownGPA.map((student) => {
                        return (
                          <div
                            key={student.Login_ID}
                            style={{ textAlign: "left" }}
                          >
                            <p
                              style={{
                                fontSize: 32,
                                textAlign: "center",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Overall GPA: {student.OverallGPA}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      value="Close"
                    >
                      Exit
                    </button>
                    <ReactToPrint
                      trigger={() => <button>Print</button>}
                      content={() => componentRef2.current}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="modal fade" id="thirdModal">
              <div class="modal-dialog modal-lg">
                <div class="modal-content" ref={componentRef3}>
                  <div class="modal-header">
                    <h1>All Courses</h1>
                    <DropdownButton
                      size="sm"
                      id="dropdown-basic-button"
                      title="Course Subject"
                      onSelect={handleDropDown}
                    >
                      <Dropdown.Item eventKey="1">English</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Calculus</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Business</Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        Computer Science
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">Science</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div class="modal-body">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>CRN</th>
                          <th>Course ID</th>
                          <th>Course Name</th>
                          <th>Term</th>
                        </tr>
                      </thead>
                      {coursesAv &&
                        coursesAv.map((all) => {
                          return (
                            <tbody
                              key={all.Login_ID}
                              style={{ textAlign: "left" }}
                            >
                              <tr>
                                <td>{all.CRN}</td>
                                <td>{all.Course_ID}</td>
                                <td>{all.Course_Name}</td>
                                <td>{all.Term}</td>
                              </tr>
                            </tbody>
                          );
                        })}
                    </Table>
                  </div>
                  <div class="modal-footer">
                    <div className="col align-items-center">
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        value="Close"
                      >
                        Exit
                      </button>
                      <ReactToPrint
                        trigger={() => <button>Print</button>}
                        content={() => componentRef3.current}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <Buttond
          variant="light"
          data-toggle="modal"
          data-target="#myModal"
          onClick={QueryViewCoursesTaken}
        >
          View all Courses taken
        </Buttond>{" "}
        <Buttond
          variant="light"
          data-toggle="modal"
          data-target="#secondModal"
          onClick={QueryViewGPA}
        >
          View GPA
        </Buttond>{" "}
        <Buttond
          variant="light"
          data-toggle="modal"
          data-target="#thirdModal"
          onClick={QueryViewCoursesAv}
        >
          Search Courses
        </Buttond>{" "}
        <Buttond variant="light">View Personal Information</Buttond>
      </div>
    </div>
  );
}

export default User;
