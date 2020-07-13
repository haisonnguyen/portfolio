import React from 'react';

import { Container, Row, Col } from 'react-bootstrap/';

import Icon from '@mdi/react';
import { mdiSpeedometer, mdiCellphoneLink, mdiRocket, mdiLightbulb } from '@mdi/js';

export default function About() {
    return (
        <section id="about">
            <Container>
                <div className="header">About</div>
                <Row>
                    <Col sm={6} lg={3}>
                        <Icon path={mdiCellphoneLink}
                            size={3}
                            horizontal
                             />
                    </Col>
                    <Col sm={6} lg={3}>
                        <Icon path={mdiSpeedometer}
                            size={3}
                            horizontal
                             />
                    </Col>
                    <Col sm={6} lg={3}>
                        <Icon path={mdiRocket}
                            size={3}
                            horizontal
                             />
                    </Col>
                    <Col sm={6} lg={3}>
                        <Icon path={mdiLightbulb}
                            size={3}
                            horizontal
                             />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}