import React from "react";
import { Button, ButtonGroup, Fab, Form, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Buttond from "react-bootstrap/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Row, Col } from "react-bootstrap";
import Formb from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import "./gg.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ptest() {
  return (
    <div>
    <Tabs>
        <TabList>
            <Tab>Find User</Tab>
            <Tab>Add User</Tab>
            <Tab>Update User</Tab>
            <Tab>Delete User</Tab>
        </TabList>
        <TabPanel>
            <h2>title 1 junk</h2>
        </TabPanel>
        <TabPanel>
        <h1>Enter New User Profile</h1>
              <Formb>
                <Row>
                  <Col>
                    <Formb.Control placeholder="Student ID" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="First Name" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="Last Name" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="Password" />
                  </Col>
                  <Col>
                    <Formb.Control placeholder="Email" />
                  </Col>{" "}
                  <Col>
                    <Formb.Control placeholder="Phone" />
                  </Col>{" "}
                </Row>
              </Formb>
        </TabPanel>
        <TabPanel>
            <h2>title 2 junk</h2>
        </TabPanel>
        <TabPanel>
        <h1>Delete User Account</h1>
              <Formb>
                <Row>
                  <Col>
                    <Formb.Control placeholder="Student ID" />
                  </Col>
                </Row>
              </Formb>
        </TabPanel>
    </Tabs>
    </div>
  );
}
export default ptest;
