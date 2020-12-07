import React from 'react';
import { Jumbotron, Container, Image, Col, Row } from 'react-bootstrap';


function AboutMe() {
    return (
    <Jumbotron fluid>
        <Container>
            <Row>
            <Col></Col>
            <Col xs={6}>
            <Image src="url('/me.png')" fluid />
            <h1>Fluid jumbotron</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
            </Col>
            <Col></Col>
            </Row>
        </Container>
    </Jumbotron>
    )
}

export default AboutMe;