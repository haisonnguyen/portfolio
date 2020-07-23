import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap/';

import Icon from '@mdi/react';
import { mdiSpeedometer, mdiCellphoneLink, mdiCloud, mdiHatFedora } from '@mdi/js';

import selfie from '../me_selfie.JPEG'

export default function About() {
    return (
        <section id="about">
            <Container>
                <div className="section-header translate-right-full transition-right-full">About</div>
                <Row className="row-icon translate-left-full transition-left-full" xs={6} lg={3}> 
                    <Col className="icon-square" xs={6} lg={3}>
                        <Icon path={mdiCellphoneLink}
                            size={2}
                        />
                        <div className="icon-label">
                            Responsive
                             </div>
                        <div className="subsection-content">
                            My layouts are responsive, but so am I. Shoot me an email.
                        </div>
                    </Col>
                    <Col className="icon-square" xs={6} lg={3}>
                        <Icon path={mdiSpeedometer}
                            size={2}
                        />
                        <div className="icon-label">
                            Fast
                             </div>
                        <div className="subsection-content">
                            Hate waiting on pages or widgets to load? Me too. Don't Wait.
                        </div>
                    </Col>
                    <Col className="icon-square" xs={6} lg={3}>
                        <Icon path={mdiCloud}
                            size={2}
                        />
                        <div className="icon-label">
                            Cloud ready
                        </div>
                        <div className="subsection-content">
                            Scalable solutions using AWS or GCP.
                            </div>
                    </Col>
                    <Col className="icon-square" xs={6} lg={3}>
                        <Icon path={mdiHatFedora}
                            size={2}
                        />
                        <div className="icon-label">
                            Diverse
                            </div>
                        <div className="subsection-content ">
                            When it comes to software, I like to wear many hats to get the job done.
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={6} id="aboutMe" className="subsection translate-right transition-right">
                        <div className="subsection-header">Who Am I?</div>
                        <Image src={selfie} style={{ margin: "auto", display: "block", paddingTop: "20px", paddingBottom: "20px" }}></Image>
                        <p className="subsection-content">
                            Computer Science graduate from Portland State University. My experience revolves around full stack engineering and consuming a lot of coffee. I'm quick, adaptable and have a strong desire to learn.
                        </p>
                    </Col>
                    <Col sm={12} lg={6} id="skills" className="subsection translate-left transition-left">
                            <Row>
                                <Col className="subsection" sm={12} l={6}>
                                <div className="subsection-header" > Hobbies, Skills, Interests</div>
                                <div className="subsection-content">
                                    <p className="subsection-content">
                                        I am a high energy sports fan, hip-hop enthusiast, foodie fanatic, and video gamer.
                                        Just like anyone else, I love grabbing drinks, travelling and cooking!
                                    </p>
                                    <p className="subsection-content">
                                        I stand out by having some cool beatboxing skills and within tech, I like to wear many hats.
                                    </p>
                                </div>
                                </Col>
                            </Row>
                        <Row>
                            <Col className="skills">
                                <div className="label">
                                DevOps:
                                </div>
                                 <ul>
                                    <li>Docker</li>
                                    <li>Kubernetes</li>
                                </ul>                            
                                <div className="label">
                                Databases:
                                </div>
                                <ul>
                                    <li>SQL/NoSQL</li>
                                </ul>
                            </Col>
                            <Col className="skills">
                                <div className="label">
                                Frontend:
                                </div>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS/Bootstrap</li>
                                    <li>JQuery</li>
                                    <li>ReactJS</li>
                                </ul>
                            </Col>
                            <Col className="skills">
                                <div className="label">
                                Backend:
                                </div>
                                 <ul>
                                    <li>Node/Express</li>
                                    <li>Flask</li>
                                    <li>MongoDB</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}