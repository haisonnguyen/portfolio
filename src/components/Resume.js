import React from 'react';

import { Container, Row, Col } from 'react-bootstrap/';

export default function Resume() {
    return (
        <section id="resume" >
            <Container>
                <div className="section-header transition-left-full translate-left-full">Experience</div>
                <Row>
                    <Col sm={12} lg={6} className="translate-right transition-right">
                        <div className="job-company">Vacasa</div>
                        <div className="job-title">Product Management Intern, Real Esate at Vacasa</div>
                        <div>Portland, OR, October 2019 - March 2020</div>
                        <div className="job-description">
                            <ul>
                                <li>
                                    Increased the confidence of a real estate estimation tool by gathering data from vacation home sites
                                    </li>
                                <li>
                                    Created tests to crowdsource on Amazon's Mechanical Turk
                                    </li>
                                <li>
                                    Standardized test results and fed into S3 and Redshift for engineering pipeline consumption
                                    </li>
                                <li>
                                    Optimized manual validation process by designing a web app using MongoDB, Express, React, and Node
                                    </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} className="translate-left transition-left">
                        <div className="job-company">Portland State University</div>
                        <div className="job-title">Undergraduate Research Intern, Portland State University Capstone</div>
                        <div>Portland, OR, March - September 2018</div>
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
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={12}>
                        <div className="section-header translate-right-full transition-right-full">Projects</div>
                        <div className="transition-left-full translate-left-full">
                        <div className="job-title">PREPHub, Portland State University Senior Capstone</div>
                        <div>Spring - Summer 2019</div>
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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}