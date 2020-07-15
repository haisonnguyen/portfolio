import React from 'react';

import { Container, Row, Col } from 'react-bootstrap/';

export default function Resume() {
    return (
        <section id="resume" >
            <Container>
                <div className="section-header">Resume</div>
                <Row>
                    <Col>
                        <div>
                            <div className="subsection-header">Experience</div>
                            <div className="company">Vacasa</div>
                            <div className="job-title">Product Management Intern, Real Esate at Vacasa, Portland, OR, October 2019 - March 2020</div>
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Increased the confidence of a real estate estimation tool by gathering home data from sites like AirBnb
                                    </li>
                                    <li>
                                        Created tests to crowdsource on Amazon's Mechanical Turk
                                    </li>
                                    <li>
                                        Standardized test results using Jupyter Notebook and fed into S3 and Redshift for engineering pipeline consumption
                                    </li>
                                    <li>
                                        Optimized manual validation process by designing a web application using MongoDB, Express, React, and Node
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="company">Portland State University</div>
                            <div className="job-title">Undergraduate Research Intern, Portland State University Capstone, Portland, OR, March - September 2019</div>
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Analyzed CRETE, a testing framework that is used for bug deteection and test case generation
                                    </li>
                                    <li>
                                        Centralized CRETE using Docker to standardize CRETE's deploymeny and automate testing
                                    </li>
                                    <li>
                                        Revamped CRETE's documentation on Github, integrating Docker deployment instructions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subsection-header">Projects</div>
                        <Container>
                            <div className="job-title">PREPHub, Portland State University Senior Capstone, Spring - Summer 2019</div>
                            <div className="job-description">
                                <p>
                                    PREPHubs are a new kind of infrastructure designed to operate entirelyy off-grid during a disaster,
                                    providing crucial services that include power, communication and emergency first aid supplies. PREPHubs will serve as a community focal point during everyday life and times of disaster.

                                </p>

                                <p>
                                    My team and I collaborated with the City of Portland, Portland State University, Portland General Electric and Massachusetts Institute of Technology
                                    to create a web application to model the software that would be installed in a PREPHub tower.
                                </p>
                                <ul>
                                    <li>Consolidated technical requirements by reaching out to stakeholders to negotiate MVP</li>
                                    <li>Designed a communication architecture for different endpoints of the web application using SocketIO</li>
                                    <li>Designed frontend using basic HTML, CSS/Bootstrap, JS/Jquery, contributed server side code using NodeJs and python for controlling hardware </li>
                                </ul>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}