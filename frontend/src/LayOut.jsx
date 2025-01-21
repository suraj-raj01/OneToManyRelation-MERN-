import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link,Outlet} from "react-router-dom"
const LayOut = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
        <Container>
          <Navbar.Brand as={Link} to="home">Book Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="insert">Insert</Nav.Link>
              <Nav.Link as={Link} to="display">Display</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="outlet">
        <Outlet/>
      </div>
    </div>
  );
};

export default LayOut;
