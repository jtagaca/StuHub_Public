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
    <Tabs>
        <TabList>
            <Tab>title 1</Tab>
            <Tab>title 2</Tab>
        </TabList>
        <TabPanel>
            <h2>title 1 junk</h2>
        </TabPanel>
        <TabPanel>
            <h2>title 2 junk</h2>
        </TabPanel>
    </Tabs>
  );
}
export default ptest;
