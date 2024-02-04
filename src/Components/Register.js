// SignupLogin.js

import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";

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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  return (
    <Form>
      <h2>{isNewUser ? "Signup" : "Login"}</h2>
      <Col className="mb-3">
        <Form.Group as={Row} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ width: "25%", margin: "auto" }}
            value={email}
            onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group as={Row} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "25%", margin: "auto" }} 
            value={password} 
            onChange={handlePasswordChange}/>
        </Form.Group>
      </Col>

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
      {/* <Button variant="primary" type="submit"
        onClick={handleToggleForm}>
        {isNewUser
          ? "Already have an account? Login"
          : "Don't have an account? Signup"}
      </Button> */}
      {
        isNewUser
          ? <>
            <FormLabel>Already have an account?</FormLabel><br />
            <Button variant="primary" type="submit"
              onClick={handleToggleForm}>
              Login
            </Button>
          </>
          : <>
            <FormLabel>Don't have an account?</FormLabel><br />
            <Button variant="primary" type="submit"
              onClick={handleToggleForm}>
              Signup
            </Button>
          </>
      }

    </Form>
  );
}

export default Register;