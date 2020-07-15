import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../logo.png';

export default function Navigation() {
    return (
        <Navbar sticky="top" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}