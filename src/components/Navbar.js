import React, { Component } from "react";
import {
  Nav,
  Navbar
} from "react-bootstrap";
import $ from 'jquery';

export class NavBar extends Component {
    componentDidMount() {
        // let t = $('.nav')
        let toggler = $('.navbar-toggler')
        $('a.nav-link').on('click', function(){
            if (toggler.css('display') !== 'none')
                $(".navbar-toggler").click()
        });
    }

  render() {
    return (
      <Navbar fixed="top" expand="sm">
        <div className="container">
          <Navbar.Brand href="#">Colin Joshua Fraser</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
