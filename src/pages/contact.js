import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import Layout from "../components/layout";

function Contact() {
    return (
        <Layout>
            <div className="bg-black services">
                <Container>
                    <h2 className="text-white">Contact Us
                    </h2>
                    <Row>
                        <Col lg={9}>
                            <Card className="service-card contact">
                                <Card.Body className="p-5">
                                    <Form>
                                    <Row>
                                        <Col lg={4}>
                                            <div className="field">
                                                <p>First Name</p>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="field">
                                                <p>Last Name</p>

                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="field">
                                                <p>Email</p>

                                                <input type="email" required className="form-control" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="field">
                                                <p>Phone</p>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="field">
                                                <p>Job title</p>

                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="field">
                                                <p>Subject</p>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="field">
                                                <p>Leave us a message...</p>
                                                <textarea rows={4} className="form-control" />
                                            </div>
                                        </Col>
                                        <Col xs={12} className="mb-0">
                                            <button type="submit" className="btn bg-dark text-white px-4 rounded-pill">Submit</button>
                                        </Col>
                                    </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>

        </Layout>
    );
}
export default Contact;
