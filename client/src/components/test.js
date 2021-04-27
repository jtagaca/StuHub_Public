import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import FormsB from "react-bootstrap/Form";
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
import "./animate.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

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
            <Buttond variant="light">View all Courses</Buttond>{" "}
            <i classname="fa fa-exclamation"></i>
          </div>
        </div>
      </div>
      <div className="uicontainer mt-5">
        <div className="container-fluid mt-3">
          <Row>
            <Col lg={12}>
              <h1>
                <Clock format={"h:mm:ssa"} interval={1000} ticking={true} />
              </h1>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={6} className="border bordercolor ">
              <h1>Welcome</h1>
              <h2>$First name $last Name</h2>
            </Col>

            <Col lg={6} className="border2 bordercolor">
              <div>
                <h1>To the University of CSA, Bakersfield</h1>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <div className="borderhello bordercolor">
            <div className="col align-items-center">
              <h1>Hello there</h1>
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
        <Row></Row>
        <Buttond variant="light">View all Courses</Buttond>{" "}
        <Buttond variant="light">View GPA</Buttond>{" "}
        <Buttond variant="light">
          Show letter Grade every student got in the current semester
        </Buttond>{" "}
        {/* <div className="circle-wrapper">
        <div className="success circle"></div>
            <div className="icon">
               <div className="fa fa-check"></div>
            </div>
        <div>
      </div> */}
        {/* <div className="gradient-border">Rainbow border</div> */}
        {/* <div className="box">Rainbow border</div> */}
        {/* <div className="background-img">
        <div className="box">
       
          <div className="content">
            <h2>My animated Border </h2>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Test;
