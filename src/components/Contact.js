import React from 'react';
import { Container, Form, Button } from 'react-bootstrap/';

export default function Contact() {
    return (
        <section id="contact">
            <Container>
                <div className="section-header">Contact</div>
                <p style={{textAlign: "center"}}>Do you have a question or want to work together?</p>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Control type="email" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Your message"/>
                    </Form.Group>
                </Form>
                <Button variant="dark" href="#home">Back to top</Button>{' '}
            </Container>
        </section>
    )
}