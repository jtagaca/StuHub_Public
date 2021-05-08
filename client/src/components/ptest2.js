import { React, Component } from "react";
import { Button, ButtonGroup, Fab, TextField } from "@material-ui/core";
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
import "../index.css";

function ptest2() {
  return ( 
      <div>
            <h1 style = {{color:'orange',
                textalign:'center'}}>module testing</h1>
              
            <div id = "leftbox" style = {{float:'left',
                background:'red',
                width:'25%',
                height:'280px'}}>
                <h2>module1</h2>
                test1
            </div> 
              
            <div id = "middlebox" style = {{float:'left',
                background:'green',
                width:'50%',
                height:'280px'}}>
                <h2>module2</h2>
                test2
            </div>
              
            <div id = "rightbox" style = {{float:'right',
                background:'blue',
                width:'25%',
                height:'280px'}}>
                <h2>module3</h2>
                test3
            </div>
        </div>
  );
}
export default ptest2;
