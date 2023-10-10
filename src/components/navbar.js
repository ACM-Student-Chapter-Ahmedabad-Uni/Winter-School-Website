import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
  <Container>
    <Navbar.Brand href="#home">ACM Ahmedabad University</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#events">Events</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#team">Team</Nav.Link>
        <Nav.Link href="#resources">Resources</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default TextLinkExample;
