import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.jpg'; // replace with the actual path to your logo

function TextLinkExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar className="custom-navbar" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" width="250" height="100" className="d-inline-block align-top" /> {/* adjust width and height as needed */}
            {' '}
            ACM Ahmedabad University
          </Navbar.Brand>
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
      
    </div>
  );
}

export default TextLinkExample;
