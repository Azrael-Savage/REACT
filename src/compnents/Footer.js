import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </Col>
          <Col className="text-end">
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="me-2">
              Discord
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="me-2">
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
