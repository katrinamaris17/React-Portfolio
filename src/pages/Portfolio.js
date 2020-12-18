import React from 'react';
import { Jumbotron, Container, Col, Row, Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import {
    Link
} from "react-router-dom";
import GlobalExplorer from "../Assets/globalexplorer.png"
import Password from "../Assets/password.png"
import Quiz from "../Assets/quiz.png"
import Calendar from "../Assets/calendar.png"


function Portfolio() {
    return (
        // <Jumbotron fluid>
            <Container style={{backgroundColor:"#98B4D4"}}>
                <Row>
                    <Col>
                    <h1>Recent Projects</h1>
                    <br />
                    <h5>Google Book Search - A Virtual Library</h5>
                    <Link onClick={(e) => (window.location= 'https://google-books-katrina123.herokuapp.com/')}>Click here to test drive</Link>
                    <ReactPlayer url='https://vimeo.com/492330189' />
                    </Col>
                    <Col>
                    <br />
                    <h5>Project 2 - React App - Weedster</h5>
                    <Link onClick={(e) => (window.location= 'https://weedster.herokuapp.com/')}>Click here to test drive</Link>
                    <ReactPlayer url='https://vimeo.com/489231994' />
                    </Col>
                    <Col>
                    <br />
                    <h5>A simple note taker</h5>
                    <Link onClick={(e) => (window.location= 'https://quiet-sierra-41035.herokuapp.com/')}>Click here to test drive</Link>
                    <ReactPlayer url='https://vimeo.com/464609117' />
                    </Col>
                    <Col>
                    <h5>A "README" Generator</h5>
                    <Link onClick={(e) => (window.location= 'https://github.com/katrinamaris17/ReadMe-Generator')}>Click here to test drive</Link>
                    <ReactPlayer url='https://vimeo.com/464613531' />
                    <br />
                    </Col>
                    <br />
                    <Col>
                    <h5>Team Generator</h5>
                    <Link onClick={(e) => (window.location= 'https://github.com/katrinamaris17/Team-Profile-Generator')}>Click here to test drive</Link>
                    <ReactPlayer url='https://vimeo.com/462922337' />
                    </Col>
                </Row>
                <br />
                <h1>Other Projects</h1>
                <h5>Click on the image to learn more</h5>
                <Row>

                <Carousel>
                    <Carousel.Item style={{ width: '45rem' }}>
                        <img
                        className="d-block w-100"
                        src={GlobalExplorer}
                        alt="Project 1 - Global Explorer"
                        onClick={(e) => (window.location= 'https://github.com/katrinamaris17/GlobalExplorer')}
                        />
                        <Carousel.Caption>
                        <h3 style={{color: "gray"}}>Project 1 - Global Explorer</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ width: '45rem' }}>
                        <img
                        className="d-block w-100"
                        src={Calendar}
                        alt="Work Day Scheduler"
                        onClick={(e) => (window.location= 'https://katrinamaris17.github.io/Workday-Scheduler/')}
                        />
                        <Carousel.Caption>
                        <h3 style={{color: "gray"}}>Work Day Scheduler</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ width: '45rem' }}>
                        <img
                        className="d-block w-100"
                        src={Password}
                        alt="Password Generator"
                        onClick={(e) => (window.location= 'https://katrinamaris17.github.io/Password-Generator/')}
                        />
                        <Carousel.Caption>
                        <h3 style={{color: "gray"}}>Password Generator</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ width: '45rem' }}> 
                        <img
                        className="d-block w-100"
                        src={Quiz}
                        alt="Code Quiz"
                        onClick={(e) => (window.location= 'https://katrinamaris17.github.io/04-Code-Quiz/')}
                        />
                        <Carousel.Caption>
                        <h3 style={{color: "gray"}}>Code Quiz</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Row>
        </Container>
    // </Jumbotron>

    )
}

export default Portfolio;
