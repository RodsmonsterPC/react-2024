import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Styles/loginForm.scss";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Login() {
  return (
    <main>
      <Navbar />
      <div className="formLogin container">
        <Row>
          <Col>
            <h1>Welcome please login</h1>
          </Col>
          <Col sm={12} md={12} xl={12} fluid="md">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="btn-forms">
                <Button className="mb-3" variant="primary" type="submit">
                  Submit
                </Button>
                <Link to="/">Cancel</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default Login;
