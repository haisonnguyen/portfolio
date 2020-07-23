import React from 'react';
import { Container, Form, Button, Row, Col, Navbar } from 'react-bootstrap/';

import Icon from '@mdi/react';
import { mdiFacebook, mdiGithub, mdiLinkedin } from '@mdi/js';


export default function Contact() {
    return (
        <>
            <section id="contact">
                <Container style={{ height: "100%" }}>
                    <div className="section-header translate-right-full transition-right-full">Contact</div>
                    <Row>
                        <Col>
                            <p className="transition-left-full translate-left-full" style={{ textAlign: "center" }}>Do you have a question or want to work together?</p>
                            <Form className="transition-right-full translate-right-full">
                                <Form.Group controlId="formName">
                                    <Form.Control type="email" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formMessage">
                                    <Form.Control as="textarea" rows="3" placeholder="Your message" />
                                </Form.Group>
                            </Form>
                            <Button variant="dark" href="#home">Back to top</Button>{' '}
                        </Col>
                    </Row>
                </Container>

            </section>
            <Navbar sticky="bottom" bg="dark">
                <Container>
                    <Row>
                        <Col>
                            <Icon path={mdiFacebook}
                                size={2}
                            />
                            <Icon path={mdiGithub}
                                size={2}
                            />
                            <Icon path={mdiLinkedin}
                                size={2}
                            />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>

    )
}