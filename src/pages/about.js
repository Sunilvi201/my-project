import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import Layout from "../components/layout";

function About() {
    return (
        <Layout>
            <div className="bg-black services">
                <Container>
                    <h2 className="text-white">Who We Are
                    </h2>
                    <Card className="text-white service-card rounded-0 about-card">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <h4>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.

                                    </h4>
                                    <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </Col>
                                <Col lg={6}>
                                    <img src="https://static.wixstatic.com/media/c837a6_bb5b3c8a1cd442e1b35892348cae6a69~mv2.jpg/v1/fill/w_1052,h_1018,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1672982068%20copy.jpg" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>


                </Container>
            </div>
            <ParallaxBanner
                layers={[
                    { image: 'https://images.pexels.com/photos/6059094/pexels-photo-6059094.jpeg', speed: -20 },
                ]}
                className="aspect-[2/1]">
                <section className="service-section position-relative d-flex-column core-value p-0">
                    <Container className="position-relative sticky-container our-mis text-white">
                        <h2 className="sticky-title text-dark">Our Mission</h2>
                        <h3 className="text-white">I'm a paragraph. Click here to add <br />your own text and edit me. It’s easy.<br /> Just click “Edit Text” or double click<br /> me to add your own content and<br /> make changes to the font.
                        </h3>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or<br /> double click me to add your own content and make changes to the font. I’m a great place for<br /> you to tell a story and let your users know a little more about you.

                        </p>
                    </Container>

                    <Container className="sticky-container position-relative about-cont">
                        <h2 className="sticky-title text-dark">Core Values</h2>
                        <Row>
                            <Col lg={4} className="p-0"><Card className="bg-black text-white service-card rounded-0">
                                <Card.Body>
                                    <h3>Design Services
                                    </h3>
                                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.

                                    </p>
                                </Card.Body>
                            </Card></Col>
                            <Col lg={4} className="p-0"><Card className="bg-black text-white service-card rounded-0">
                                <Card.Body>
                                    <h3>Design Services
                                    </h3>
                                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.

                                    </p>
                                </Card.Body>
                            </Card></Col>
                            <Col lg={4} className="p-0"><Card className="bg-black text-white service-card rounded-0">
                                <Card.Body>
                                    <h3>Design Services
                                    </h3>
                                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.

                                    </p>
                                </Card.Body>
                            </Card></Col>

                        </Row>
                    </Container>
                </section>
            </ParallaxBanner>
        </Layout>
    );
}
export default About;
