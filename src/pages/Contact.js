import React from 'react';
import { Jumbotron , Container, Col, Row, Form } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function Contact() {
    return (
        <Container style={{backgroundColor:"#98B4D4"}}>
          <br></br>
          <Row>
          <Col></Col>
          <Col xs={6} style={{textAlign:"center", fontStyle:"inherit"}}>Contact Me</Col>
          <Col></Col>
          </Row>
          <br></br>
        <Row>
          <Col></Col>
          <Col xs={6}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <br></br>
      </Container>
    )
}

export default Contact;
