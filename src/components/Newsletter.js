import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && onValidated) {
      onValidated({ EMAIL: email });
    }
  };

  return (
    <div className="newsletter">
      <h4>Subscribe to our newsletter</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newsletterEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Subscribe</Button>
        {status === "sending" && <p>Sending...</p>}
        {status === "error" && (
          <p dangerouslySetInnerHTML={{ __html: message }}></p>
        )}
        {status === "success" && (
          <p>Thanks for subscribing! Check your email for a confirmation.</p>
        )}
      </Form>
    </div>
  );
};
