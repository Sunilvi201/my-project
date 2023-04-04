import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import Layout from "../components/layout";

function Materials() {
    return (
        <Layout>
            <div className="bg-black services material">
                <Container>
                    <h2 className="text-white mb-3">We Keep Top Notch Materials
                    </h2>
                    <p className="text-white mb-4">Highest quality materials provide highest quality products
                    </p>
                    <Row>
                        <Col lg={4} className="p-0 mb-4 mb-lg-0">
                            <Card className="bg-dark text-white service-card rounded-0 sticky-container">
                                <h4 className="sticky-title text-dark">Plastic
                                </h4>
                                <Card.Body>
                                    <Row className="product-card">
                                        <Col>
                                            <div className="card p-0">
                                                <div className="card-body p-0">
                                                    <img src="https://picsum.photos/200/500" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    <ul className="feature-list">
                                        <li>Plastic</li>
                                        <li>Nylon</li>
                                        <li>ABS</li>
                                        <li>PEEK</li>
                                        <li>Polycarbonate</li>
                                        <li>Polyethylene</li>
                                        <li>Polypropylene</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="p-0 mb-4 mb-lg-0"><Card className="bg-dark text-white service-card rounded-0 sticky-container">
                            <h4 className="sticky-title text-dark">Plastic
                            </h4>
                            <Card.Body>
                                <Row className="product-card">
                                    <Col>
                                        <div className="card p-0">
                                            <div className="card-body p-0">
                                                <img src="https://picsum.photos/200/500" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <ul className="feature-list">
                                        <li>Plastic</li>
                                        <li>Nylon</li>
                                        <li>ABS</li>
                                        <li>PEEK</li>
                                        <li>Polycarbonate</li>
                                        <li>Polyethylene</li>
                                        <li>Polypropylene</li>
                                    </ul>
                            </Card.Body>
                        </Card></Col>
                        <Col lg={4} className="p-0 mb-4 mb-lg-0"><Card className="bg-dark text-white service-card rounded-0 sticky-container">
                            <h4 className="sticky-title text-dark">Plastic
                            </h4>
                            <Card.Body>
                                <Row className="product-card">
                                    <Col>
                                        <div className="card p-0">
                                            <div className="card-body p-0">
                                                <img src="https://picsum.photos/200/500" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <ul className="feature-list">
                                        <li>Plastic</li>
                                        <li>Nylon</li>
                                        <li>ABS</li>
                                        <li>PEEK</li>
                                        <li>Polycarbonate</li>
                                        <li>Polyethylene</li>
                                        <li>Polypropylene</li>
                                    </ul>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
}
export default Materials;
