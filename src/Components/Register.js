// SignupLogin.js

import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register({ onLogin, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false); // Track if the user is new or existing

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleSignup = () => {
    onSignup(email, password);
  };

  const handleToggleForm = () => {
    setIsNewUser(!isNewUser);
  };


  return (
    <Form>
      <h2>{isNewUser ? "Signup" : "Login"}</h2>
      <Row className="mb-3">
        <Form.Group as={Row} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Row} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      {isNewUser ? (
        <Button variant="primary" type="submit"
          onClick={handleSignup}>
          Signup
        </Button>
      ) : (
        <Button variant="primary" type="submit"
          onClick={handleLogin}>
          Login
        </Button>
      )}
      <br />
      <Button variant="primary" type="submit"
        onClick={handleToggleForm}>
        {isNewUser
          ? "Already have an account? Login"
          : "Don't have an account? Signup"}
      </Button>

    </Form>
  );
}

export default Register;