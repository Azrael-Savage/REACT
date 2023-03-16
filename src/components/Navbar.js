import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="animate__animated animate__fadeInDown">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.png" alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
            <Nav.Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </Nav.Link>
            <Nav.Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-discord"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Let's Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

