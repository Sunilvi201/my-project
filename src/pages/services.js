import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import Layout from "../components/layout";

function Services() {
    return (
        <Layout>
            <div className="bg-black services">
                <Container>
                    <h2 className="text-white">What We Can Do for You</h2>
                    <Row>
                        <Col lg={6} className="p-0">
                            <Card className="bg-dark text-white service-card rounded-0">
                                <Card.Body>
                                    <h3>Rapid Prototyping</h3>
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} className="p-0"><Card className="bg-dark text-white service-card rounded-0">
                            <Card.Body>
                                <h3>Online 3D Printing
                                </h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                            </Card.Body>
                        </Card></Col>
                        <Col lg={6} className="p-0"><Card className="bg-dark text-white service-card rounded-0">
                            <Card.Body>
                                <h3>Design Services
                                </h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                            </Card.Body>
                        </Card></Col>
                        <Col lg={6} className="p-0"><Card className="bg-dark text-white service-card rounded-0">
                            <Card.Body>
                                <h3>Post Processing
                                </h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </Container>
            </div>
            <ParallaxBanner
          layers={[
            { image: 'https://images.pexels.com/photos/2268575/pexels-photo-2268575.jpeg', speed: -20 },
          ]}
          className="aspect-[2/1]">
            <section className="service-section position-relative d-flex-column text-center">
                <Container>
                    <h3 className="text-center text-white">"We all have our time machines, don't we.<br/> Those that take us back are memories... <br/>those that carry us forward are dreams."<br/>
                        <span className="d-inline-block">HG Wells</span>
</h3>
<Link to="/" class="pills-btn-link">Get a Quote</Link>
                </Container>
            </section>
            </ParallaxBanner>
        </Layout>
    );
}
export default Services;
