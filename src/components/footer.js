import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col md={3} className="d-flex flex-column align-items-start mb-4 mb-md-0">
                        <h4>Contact</h4>
                        <p>
                            500 Terry Francine Street <br /> San Francisco, CA 94158 <br />info@mysite.com<br />123-456-7890
                        </p>
                        <Link
                            to="\"
                            className="pills-btn-link ms-0 mt-auto"
                        >
                            Get a Quote
                        </Link>
                    </Col>
                    <Col md={5} className="d-flex flex-column mb-4 mb-md-0">
                        <h4>Be in the Know</h4>
                        <p>
                            I'm a paragraph. Click here to add your own text
                            and edit me. Let your users get to know you.
                        </p>

                        <form className="d-flex flex-column mt-auto">
                            <label htmlFor="inputMail" className="mb-3" >Email</label>
                            <div className="d-flex flex-xl-row flex-column">
                                <input type="email" name="email" id="inputMail" required className="mb-3 mb-xl-0 form-control me-3 rounded-pill bg-transparent text-white" placeholder="Email" autoComplete="off" />
                                <button aria-disabled="false" data-testid="buttonElement" className="pills-btn-link ms-0 border-0">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Col>
                    <Col md={2} className="mb-4 mb-md-0">
                        <h4>Menu</h4>
                        <ul className="menu-list mb-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Services</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Materials</Link>
                            </li>
                            <li>
                                <Link to="/">Resources</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4>Follow us on</h4>
                        <ul className="menu-list mb-0">
                            <li>
                                <Link to="/">Facebook</Link>
                            </li>
                            <li>
                                <Link to="/">Instagram</Link>
                            </li>

                        </ul>
                    </Col>
                </Row>
                <p className="copyright">
                    © 2023 All right reserved!</p>
            </Container>
        </footer>
    );
};
export default Footer;
