import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
// import { Card } from 'react-bootstrap'; // Import Card component
import './navbar-style.css';

function TextLinkExample() {
  return (
    <Navbar expand="lg">
      <img src="../images/AU_logo.jpg" alt="Logo" width="20%" height="20%" className="d-inline-block align-centre" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className='mr-6'>
          <Nav.Link href="/" className="text-base font-medium text-gray-700 hover:text-gray-900 ml-4">
            HOME
          </Nav.Link>
          <Nav.Link href="/schedule" className="text-base font-medium text-gray-700 hover:text-gray-900 ml-4">
            SCHEDULE
          </Nav.Link>
          <Nav.Link href="/speakers" className="text-base font-medium text-gray-700 hover:text-gray-900 ml-4">
            SPEAKERS
          </Nav.Link>
          <Nav.Link href="/team" className="text-base font-medium text-gray-700 hover:text-gray-900 ml-4">
            TEAM
          </Nav.Link>
          <Nav.Link href="/venue" className="text-base font-medium text-gray-700 hover:text-gray-900 ml-4">
            VENUE
          </Nav.Link>
          {/* <Nav.Link href="/resources" className="text-base font-medium text-gray-700 hover:text-gray-900 ml-4">
            RESOURCES
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TextLinkExample;
