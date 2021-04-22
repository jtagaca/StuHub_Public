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
      <Container className="align-left">

        <Col lg={6}  >
          <h1>Welcome</h1>
        </Col>
        <Col lg={6}  >
          <h1>$name of the student</h1>
        </Col>

 
        
        <Row>
        <Col>
          <h1>To the University of CSA, Bakersfield</h1>
        </Col>
      </Row>
      </Container>

     

      <Row>
        <Col>
          <h1>To the University of CSA, Bakersfield</h1>
        </Col>
      </Row>


      
      <Row>
        <Col>
          <h1>Student ID: $1000001</h1>
        </Col>
      </Row>
      <Buttond variant="light">View all Courses</Buttond>{" "}

      <Buttond variant="light">View GPA</Buttond>{" "}

      <Buttond variant="light">Show letter Grade every student got in the current semester</Buttond>{" "}
      <FormsB>
        <Row>
          <Col>
            <FormsB.Control placeholder="First name" />
          </Col>
          <Col>
            <FormsB.Control placeholder="Last name" />
          </Col>
        </Row>
      </FormsB>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <Buttond variant="dark">Find</Buttond>{" "}
    </div>
  );
}

export default Test;
