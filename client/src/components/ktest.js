import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Buttond from "react-bootstrap/Button";
import "./component.scss";
import { useState } from "react";
import Axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import Clock from "react-live-clock";
// import "./animate.scss";
import "./gg.css";

function Test(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
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

      <div className="my-5">
        <Buttond variant="light" >View all Courses</Buttond>{" "}
        <Buttond variant="light">View GPA</Buttond>{" "}
        <Buttond variant="light">
          Show letter Grade every student got in the current semester
        </Buttond>{" "}
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1>Query description</h1>
                  </div>
                  <div class="modal-body">
                    Put query data here
                  </div>
                  <div class="modal-footer">
                    <input class="btn btn-primary" data-dismiss='modal' value="Close"></input>
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
                    <h1>New Query</h1>
                  </div>
                  <div class="modal-body">
                    Put query data here
                  </div>
                  <div class="modal-footer">
                    <input class="btn btn-primary" data-dismiss='modal' value="Close"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="modal fade" id="thirdModal">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1>New Query</h1>
                  </div>
                  <div class="modal-body">
                    Put query data here
                  </div>
                  <div class="modal-footer">
                    <input class="btn btn-primary" data-dismiss='modal' value="Close"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
            <button data-toggle="modal" data-target="#myModal">First Modal</button>
            <button data-toggle="modal" data-target="#secondModal">Second Modal</button>
            <button data-toggle="modal" data-target="#thirdModal">Third Modal</button>
        </div>
      </div>
            

          </div>

  );


  
}

export default Test;
