import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../dtw small.png'; // Ensure you have the correct path to your logo
import "./letestnav.css"; 
const NavigationBar = () => {
  return (
    <Navbar bg="rgb(248, 147, 29)" id='navigationmain' expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            id='logonav'
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <FaShoppingCart size={20} className="me-2" />
              Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <Button variant="outline-primary" className="me-2">
                Login
              </Button>
            </Nav.Link>
            <Nav.Link href="/registration">
              <Button variant="primary">
                Sign Up
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
