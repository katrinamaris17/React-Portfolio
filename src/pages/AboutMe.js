import React from 'react';
import { Jumbotron, Container, Image, Col, Row } from 'react-bootstrap';
import Me from '../Assets/me.png'
import {
    Link
} from "react-router-dom";

function AboutMe() {
    return (
    // <Jumbotron fluid>
        <Container style={{backgroundColor:"#98B4D4"}}>
        <Row>
            <Col>
            <br />
            <Image src={Me} fluid />
            <br />
            </Col>
            <Col>
            <br />
            <h1>Katrina Arando</h1>
            <br />
            <p>
            I am currently learning full-stack web development at the UC Berkeley Coding Boot Camp. I have over 10+ years of successful project management experience in the construction industry. I have a passion for learning new things, solving problems and bringing visions to life. My goal is to parlay my years of professional experience and skill sets into the world of web design and software development. I live in the Bay Area with my family. We love exploring new places together. Please feel free to connect with me through the contact page.
            </p>
            <br />
            </Col>
        </Row>
        </Container>
    // </Jumbotron>
    )
}

export default AboutMe;