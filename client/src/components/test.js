import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "../index.css";

function test(props) {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  "
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
      <h1> GPA finder... </h1>
      <Form.Control as="select">
        <option>Default select</option>
        <option>Default select</option>
        <option>Default select</option>
      </Form.Control>

      <h1> Find a student </h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search By Student ID"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <h1> Find the Faculties </h1>
      <Form.Control as="select">
        <option>Department </option>
        <option>Department </option>
        <option>Department </option>
      </Form.Control>
      <Form>
        <Form.Group controlId="formBasicRange">
          <Form.Label>GPA range</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
      </Form>

      <Form>
        <Form.Row>
          <Col xs={7}>
            <Form.Control placeholder="Faculty Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Student Id" />
          </Col>
          {/* <Col>
            <Form.Control placeholder="" />
          </Col> */}
        </Form.Row>
      </Form>

   
      <Button variant="dark">Find</Button>{' '}
    </div>
  );
}

export default test;
