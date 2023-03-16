import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 animate__animated animate__fadeInUp">
      <Container>
        <Row>
          <Col>
            <img src="/logo.svg" alt="Logo" height="30" />
          </Col>
          <Col className="text-end">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-discord"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


