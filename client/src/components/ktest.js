import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Buttond from "react-bootstrap/Button";
import "./component.scss";
import { useState, useEffect } from "react";
import Axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import Clock from "react-live-clock";
// import "./animate.scss";
import "./gg.css";
import Table from "react-bootstrap/Table";

function Test(props) {
  
  //hooks here 
  const [coursesTaken, setCoursesTaken] = useState([]);
  const [ownGPA, setOwnGPA] = useState();
  const [coursesAv, setCoursesAv] = useState([]);
 
  const QueryViewCoursesTaken = () => {
    Axios.get("/getStuCourses", {
      params: { LoginID: 100002 }
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
      params: { LoginID: 100002 }
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
      params: { LoginID: 100002 }
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
      <div class ="row">
      </div>
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
              <h2>$First name $last Name</h2>
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
                  <h1>Student ID: $1000001</h1>
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
                <div class="modal-content">
                  <div class="modal-header">
                    <h1>Course History</h1>
                  </div>
                  <div class="modal-body">
                  <p style={{textAlign: "center", fontWeight: "bold"}}>*WIP = Work in Progress</p>
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

                    {coursesTaken && coursesTaken.map((student) => {
                      return (
                        
                          <tbody key={student.Login_ID} style={{textAlign: 'left'}}>
                            <tr>
                              <td>{student.CRN}</td> 
                              <td>{student.Course_ID}</td> 
                              <td>{student.Course_Name}</td> 
                              <td>{student.Term}</td>
                              {student.Grade ? <td>{student.Grade}</td> : <td>WIP</td> }
                            </tr>
                          </tbody>
                  
                      );
                    })}
                  </Table>
                  
                  </div>
                  <div class="modal-footer">
                    <div className="col align-items-center">
                      <button class="btn btn-primary" data-dismiss='modal' value="Close">
                        Exit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div class="col-md-12">
            <div class="modal fade" id="secondModal">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1>GPA</h1>
                  </div>
                  <div class="modal-body">
                  {ownGPA && ownGPA.map((student) => {
                    return (
                      <div key={student.Login_ID} style={{textAlign: 'left'}}>
                        <p> {student.OverallGPA} </p>
                      </div>
                    );
                  })}
                  </div>
                  <div class="modal-footer">
                      <button class="btn btn-primary" data-dismiss='modal' value="Close">
                        Exit
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="modal fade" id="thirdModal">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1>All Courses</h1>
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

                        {coursesAv && coursesAv.map((all) => {
                          return (
                            <tbody key={all.Login_ID} style={{textAlign: 'left'}}>
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
                      <button class="btn btn-primary" data-dismiss='modal' value="Close">
                        Exit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="my-5">
        <Buttond variant="light" data-toggle="modal" data-target="#myModal"  onClick = {QueryViewCoursesTaken}>
          View all Courses taken
          </Buttond>{" "}
        <Buttond variant="light" data-toggle="modal" data-target="#secondModal" onClick = {QueryViewGPA}>
          View GPA
          </Buttond>{" "}
        <Buttond variant="light" data-toggle="modal" data-target="#thirdModal" onClick = {QueryViewCoursesAv}>
          Search Courses
        </Buttond>{" "}
      </div>

    </div>

  );
}

export default Test;
