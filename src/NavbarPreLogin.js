import React from "react";
import {Navbar, Nav, Button} from 'react-bootstrap';

import logo from './imgs/W-Logo_Purple_Hex.png';
import {Link} from "react-router-dom";

import {HashLink} from 'react-router-hash-link';

const NavbarPreLogin = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Navbar.Brand href="#">
        <img src={logo} id="logo" />
        UW Rowing Visualizer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><HashLink to="/#" className="navLink">Home</HashLink></Nav.Link>
          <Nav.Link><HashLink to="/#overview" className="navLink">Overview</HashLink></Nav.Link>
          <Nav.Link><HashLink to="/#howto" className="navLink">How it Works</HashLink></Nav.Link>
          <Nav.Link><HashLink to="/#whatWeDid" className="navLink">What We Did</HashLink></Nav.Link>
          <Nav.Link><HashLink to="/#users" className="navLink">Our Goal</HashLink></Nav.Link>
          <Nav.Link><HashLink to="/#aboutus" className="navLink">Our Team</HashLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPreLogin;