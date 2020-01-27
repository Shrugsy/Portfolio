import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export class NavBar extends Component {
  componentDidMount() {

    let navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', this.toggleDropdown)
    })
  }

  toggleDropdown(){
    let toggler = document.querySelector('.navbar-toggler');
    if (window.getComputedStyle(toggler).display !== "none") {
      toggler.click();
    }
  }

  render() {
    return (
      <Navbar fixed="top" expand="sm">
        <div className="container">
          <Navbar.Brand href="#">Colin Joshua Fraser</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="d-sm-none">Home</Nav.Link>
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
