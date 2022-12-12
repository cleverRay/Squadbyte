import React from 'react';
import Logo from '../assests/images/Logo.png';
import '../styles/Navbar.css';

import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={Logo}
              width="160"
              // height="100"
              className="d-inline-block align-top"
              alt="Squadbyte logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="">
            <Nav.Link href="#features">How it works</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Templates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
          </Nav>
          <Button className='btn-flat'> Pricing</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;