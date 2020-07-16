import React from 'react';

import { Container, Row, Col } from 'react-bootstrap/';

import Icon from '@mdi/react';
import { mdiSpeedometer, mdiCellphoneLink, mdiRocket, mdiWeatherCloudy } from '@mdi/js';

export default function About() {
    return (
        <section id="about">
            <Container>
                <div className="section-header">About</div>
                <Row>
                    <Col className="flex" sm={6} lg={3}>
                        <Icon path={mdiCellphoneLink}
                            size={3}
                            horizontal
                        />
                        <div className="label">
                            Responsive
                             </div>
                        <div className="description">
                            My layouts are responsive, but so am I. Shoot me an email.
                        </div>
                    </Col>
                    <Col className="flex" sm={6} lg={3}>
                        <Icon path={mdiSpeedometer}
                            size={3}
                            horizontal
                        />
                        <div className="label">
                            Fast
                             </div>
                        <div className="description">
                            Hate waiting on pages or widgets to load? Me too. Don't Wait.
                        </div>
                    </Col>
                    <Col className="flex" sm={6} lg={3}>
                        <Icon path={mdiRocket}
                            size={3}
                            horizontal
                        />
                        <div className="label">
                            Dynamic
                             </div>
                        <div className="description">
                            I love to level up my projects with dynamic content.
                            </div>
                    </Col>
                    <Col className="flex" sm={6} lg={3}>
                        <Icon path={mdiWeatherCloudy}
                            size={3}
                            horizontal
                        />
                        <div className="label">
                            Cloud solutions
                        </div>
                        <div className="description">
                            Cloud technology is NOW. Power up with cloud computing.
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: "50px" }}>
                    <Col sm={12} lg={6}>
                        <div className="subsection-header">Who Am I?</div>
                        <br />
                        <p className="subsection-content">
                            My name is Haison Nguyen. I am a recent Computer Science graduate from Portland State University. Currently living in Portland, Oregon. I love living in the PNW because of the natural and cultural diversity.
                            Tech opportunies are growing here and there are adventures every single day.
                        </p>
                        <p>
                            I am open to full-time/contract opportunities and I am ready to hit the ground running in the tech industry. Send me a message and I'll promptly send you a reply!
                        </p>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="subsection-header"> Hobbies, Skills, Interests</div>
                        <div className="subsection-content">
                            <p>
                                Just like anyone else, I love watching and playing sports, going to beach, grabbing drinks, travelling and I love to play video games!
                        </p>
                            <p className="subsection-content">

                                I stand out by having some cool beatboxing skills and within tech, I like to wear many hats.
                        </p>
                            <p>
                                I love hip-hop music, education, mukbang vlogs and dog-friends!
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}