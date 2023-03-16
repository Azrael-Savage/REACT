import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Mailchimp from 'react-mailchimp-subscribe';
import './css/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    FNAME: '',
    LNAME: '',
    EMAIL: '',
    PHONE: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (subscribe) => async (e) => {
    e.preventDefault();
    subscribe(formData);
  };

  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <Container id="contact" className="contact-container py-5">
      <h3 className="text-center mb-4 animate__animated animate__fadeIn">Let's Connect</h3>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Mailchimp
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <Form onSubmit={handleSubmit(subscribe)} className="animate__animated animate__fadeInUp">
                <Form.Group controlId="FNAME">
                  <Form.Control
                    type="text"
                    name="FNAME"
                    placeholder="First Name"
                    value={formData.FNAME}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="LNAME">
                  <Form.Control
                    type="text"
                    name="LNAME"
                    placeholder="Last Name"
                    value={formData.LNAME}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="EMAIL">
                  <Form.Control
                    type="email"
                    name="EMAIL"
                    placeholder="Email"
                    value={formData.EMAIL}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="PHONE">
                  <Form.Control
                    type="tel"
                    name="PHONE"
                    placeholder="Phone Number"
                    value={formData.PHONE}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                {status === 'success' && <p className="mt-3 text-success">Thank you for subscribing!</p>}
                {status === 'error' && <p className="mt-3 text-danger">Oops! Something went wrong. Please try again.</p>}
              </Form>
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};
