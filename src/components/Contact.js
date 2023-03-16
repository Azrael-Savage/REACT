import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MailchimpForm } from "./MailChimp";

export const Contact = () => {
  return (
    <Container className="my-5 animate__animated animate__fadeIn">
      <Row>
        <Col>
          <h2>Contact Me</h2>
          <p>
            If you have any questions or would like to get in touch, please fill out the contact form below.
          </p>
          <MailchimpForm />
        </Col>
      </Row>
    </Container>
  );
};
