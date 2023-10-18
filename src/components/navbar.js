import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import './navbar-style.css';

function TextLinkExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="bg-body-tertiary" expand="lg">
  <Container>
    <Navbar.Brand href="/index">ACM Ahmedabad University</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        {/* <Nav.Link href="/home">HOME</Nav.Link> */}
        {/* <Nav.Link href="#about">ABOUT</Nav.Link> */}
        <Nav.Link href="/schedule">SCHEDULE</Nav.Link>
        <Nav.Link href="/speakers">SPEAKERS</Nav.Link>
        <Nav.Link href="/team">TEAM</Nav.Link>
        <Nav.Link href="/venue">VENUE</Nav.Link>
        <Nav.Link href="/accomodation">ACCOMODATION</Nav.Link>
        {/* <Nav.Link href="/team">CODE OF CONDUCT</Nav.Link> */}
        {/* <Nav.Link href="/resources">RESOURCES</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default TextLinkExample;
