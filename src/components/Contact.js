import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post(url, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Container id="contact" className="contact-container py-5">
      <h3 className="text-center mb-4 animate__animated animate__fadeIn">Let's Connect</h3>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp">
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {status === 'success' && <p className="mt-3 text-success">Thank you for subscribing!</p>}
          {status === 'error' && <p className="mt-3 text-danger">Oops! Something went wrong. Please try again.</p>}
        </Col>
      </Row>
    </Container>
  );
};
