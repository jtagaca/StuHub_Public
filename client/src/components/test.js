import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import FormsB from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Buttond from "react-bootstrap/Button";
import "./component.css";
import { useState } from "react";
import Axios from "axios";
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

  return (
    <div>
      <div>
        <Row>
          <Col lg={6} className="border">
            <h1>Welcome</h1>
            <h2>$First name $last Name</h2>
          </Col>

          <Col lg={6} className="border2">
            <div>
              <h1>To the University of CSA, Bakersfield</h1>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <div className="borderhello ">
          <div className="col align-items-center">
            <h1>Hello there</h1>
          </div>

          <div>
            <Row>
              <Col xl={12}>
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
      <div className="circle-wrapper">
        <div className="warning circle"></div>
        <div className="icon">
        <Buttond variant="light">View all Courses</Buttond>{" "}

          <i classname="fa fa-exclamation"></i>
        </div>
      </div>
    </div>
  );
}

export default Test;
