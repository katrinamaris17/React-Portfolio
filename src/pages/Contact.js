import React from "react";
import { Jumbotron, Container, Col, Row, Form, Button } from "react-bootstrap";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Container style={{ backgroundColor: "#98B4D4" }}>
      <br></br>
      <Row>
        <Col></Col>
        <Col xs={6} style={{ textAlign: "center", fontStyle: "inherit" }}>
          Contact Me
        </Col>
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
            <MDBContainer></MDBContainer>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <br></br>
      <Row>
        <Col></Col>
        <Col xs={6} style={{ textAlign: "center", fontStyle: "inherit" }}>
          Connect With Me Here
        </Col>
        <Col></Col>
      </Row>
      <br></br>
      <Row>
      <Col></Col>
        <Col xs={6} style={{ textAlign: "center", fontStyle: "inherit" }}>
          <MDBBtn
            social="ins"
            onClick={(e) =>(window.location = "https://www.instagram.com/katrinamaris17/")}>
            <MDBIcon fab icon="instagram" className="pr-1" /> Instagram</MDBBtn>
          <MDBBtn
            social="li"
            onClick={(e) =>(window.location ="https://www.linkedin.com/in/katrina-arando-0b4a7a26/")}>
          <MDBIcon fab icon="linkedin-in" className="pr-1" /> Linkedin</MDBBtn>
          <MDBBtn social="git"
            onClick={(e) =>(window.location ="https://github.com/katrinamaris17")}>
          <MDBIcon fab icon="github" className="pr-1" /> Github
        </MDBBtn>
        </Col>
        <Col></Col>
      </Row>
      <br></br>
    </Container>
  );
}

export default Contact;
