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
    <body> 
        <div id = "boxes">
            <h1 style = {{color:'green',
                textalign:'center'}}>GeeksforGeeks</h1>
              
            <div id = "leftbox" style = {{float:'left',
                background:'red',
                width:'25%',
                height:'280px'}}>
                <h2>Learn:</h2>
                It is a good platform to learn programming.
                It is an educational website. Prepare for
                the Recruitment drive  of product based 
                companies like Microsoft, Amazon, Adobe 
                etc with a free online placement preparation 
                course.
            </div> 
              
            <div id = "middlebox" style = {{float:'left',
                background:'green',
                width:'50%',
                height:'280px'}}>
                <h2>GeeksforGeeks:</h2>
                The course focuses on various MCQ's & Coding 
                question likely to be asked in the interviews
                & make your upcoming placement season efficient
                and successful.
            </div>
              
            <div id = "rightbox" style = {{float:'right',
                background:'blue',
                width:'25%',
                height:'280px'}}>
                <h2>Contribute:</h2>
                Any geeks can help other geeks by writing
                articles on the GeeksforGeeks, publishing
                articles follow few steps that are Articles
                that need little modification/improvement
                from reviewers are published first.
            </div>
        </div>
    </body> 
  );
}
export default ptest2;
