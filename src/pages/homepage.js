import React, { useEffect, useState } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { ParallaxBanner } from 'react-scroll-parallax';
import videoMp4 from '../assets/printer.mp4'
import Layout from "../components/layout";

const Homepage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <Layout>
      <div className="homepage">
        <ParallaxBanner
          layers={[
            { image: 'https://images.pexels.com/photos/32997/pexels-photo.jpg', speed: -20 },
          ]}
          className="aspect-[2/1]">
          <section className="hero-banner">
            <Container className="d-flex-column hero-container">
              <h1 style={{zIndex:"1"}}>
                Make Your 3D <br /> Dreams a Reality
              </h1>
              <h2 style={{zIndex:"1"}}> Professional 3D Solutions Under One Roof </h2>
              <div className="hero-btn" style={{zIndex:"1"}}>
                <Link
                  to="\"
                  className="pills-btn-link ms-0"
                >
                  Get a Quote
                </Link>
                <Link
                  to="\"
                  className="pills-btn-link btn-bg-dark "
                >
                  View Materials Catalog
                </Link>
              </div>
              <div className="banner-card flex-wrap">
                <div className="box"> Up to 1, 000 Parts </div>
                <div className="box"> 30 + Materials Available </div>
                <div className="box"> Available in 57 Countries </div>
                <div className="box"> 42 Industrial Printers </div>
              </div>
            </Container>
          </section>
        </ParallaxBanner>
          <section className="what-we-offer d-flex position-relative">
            <div className="video-box position-absolute h-100 w-100">
              <video width="100%" height="100%" autoPlay={true} muted loop >
                <source src={videoMp4} type="video/mp4" />
              </video>
            </div>
            <Container className="position-relative sticky-container d-flex">
              <h2 className="sticky-title"> What We Offer </h2>
              <div className="my-auto">
                <p>

                  As 3D manufacturing becomes more <br /> and more accessible, we
                  provide <br /> industrial solutions for the entire 3D <br />
                  process, from prototyping to <br /> industrial printing.
                </p>
                <Link
                  to="\"
                  className="pills-btn-link ms-0"
                >
                  Learn More
                </Link>
              </div>
            </Container>
          </section>
          <ParallaxBanner
          layers={[
            { image: 'https://images.pexels.com/photos/32997/pexels-photo.jpg', speed: -20 },
          ]}
          className="aspect-[2/1]">
        <section className="why-choose-printa d-flex"
          style={{
            backgroundColor: "#064369",
          }}
        >
          <Container className="position-relative sticky-container d-flex">
            <h2 className="sticky-title"> Why Choose Printa </h2>
            <Row className="my-auto">
              <Col md={7}>
                <Row>
                  <Col xl={6}>
                    <div className="img-box">
                      <img src="https://picsum.photos/200" />
                    </div>
                    <h3>
                      Cutting Edge <br /> Printers
                    </h3>
                    <p>
                      I 'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                  </Col>
                  <Col xl={6}>
                    <div className="img-box">
                      <img src="https://picsum.photos/200" />
                    </div>
                    <h3>
                      Durable, High <br /> Quality Materials
                    </h3>
                    <p>
                      I 'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                  </Col>
                  <Col xl={6}>
                    <div className="img-box">
                      <img src="https://picsum.photos/200" />
                    </div>
                    <h3>
                      Bespoke <br />
                      Service
                    </h3>
                    <p>
                      I 'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                  </Col>
                  <Col xl={6}>
                    <div className="img-box">
                      <img src="https://picsum.photos/200" />
                    </div>
                    <h3>
                      Experienced <br /> Advisor Service
                    </h3>
                    <p>
                      I 'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        </ParallaxBanner>
        <section className="top-notch-materials bg-black d-flex">
          <Container className="position-relative sticky-container text-center d-flex">
            <h2 className="sticky-title"> We Keep Top Notch Materials </h2>
            <div className="my-auto w-100">
              <Row className="product-card mb-60">
                <Col md={4}>
                  <div className="card">
                    <div className="card-body">
                      <img src="https://picsum.photos/200/500" />
                    </div>
                  </div>
                  <p> Plastic </p>
                </Col>
                <Col md={4}>
                  <div className="card">
                    <div className="card-body">
                      <img src="https://picsum.photos/200/300" />
                    </div>
                  </div>
                  <p> Metal </p>
                </Col>
                <Col md={4}>
                  <div className="card">
                    <div className="card-body">
                      <img src="https://picsum.photos/200/400" />
                    </div>
                  </div>
                  <p> Elastomer </p>
                </Col>
              </Row>
              <Link
                to="\"
                className="pills-btn-link ms-0"
              >
                See Catalog
              </Link>
            </div>
          </Container>
        </section>
        <section className="testimonials d-flex">
          <Container className="position-relative sticky-container d-flex">
            <h2 className="sticky-title"> Testimonials </h2>
            <div className="my-auto">
              <Row className="banner-card banner-card-2">
                <Col md={6} lg={4} className="mb-3 mb-lg-0">
                  <div className="box mb-3">
                    I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services.Let your customers
                    review you and tell their friends how great you are.”
                  </div>
                  <div className="profile-box d-flex">
                    <div className="profile-pic">
                      <img src="https://picsum.photos/200/100" />
                    </div>
                    <p className="profile-name mb-0">
                      Lyla Rosen <br />
                      <span> Chief Product Officer, Mico </span>
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-3 mb-lg-0">
                  <div className="box mb-3">
                    I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services.”
                  </div>
                  <div className="profile-box d-flex">
                    <div className="profile-pic">
                      <img src="https://picsum.photos/200/300" />
                    </div>
                    <p className="profile-name mb-0">
                      Lyla Rosen <br />
                      <span> Chief Product Officer, Mico </span>
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-3 mb-lg-0">
                  <div className="box mb-3">
                    I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services.Let your customers
                    review you and tell their friends how great you are.”
                  </div>
                  <div className="profile-box d-flex">
                    <div className="profile-pic">
                      <img src="https://picsum.photos/200/400" />
                    </div>
                    <p className="profile-name mb-0">
                      Lyla Rosen <br />
                      <span> Chief Product Officer, Mico </span>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className="py-5 endless-possibilities d-flex">
          <Container className="d-flex flex-column">
            <div className="my-auto d-flex flex-column">
              <h3> The Possibilities Are Endless </h3>
              <div className="custom-slider">
                <Slider {...settings}>
                  <div>
                    <img src="https://picsum.photos/200/400" />
                  </div>
                  <div>
                    <img src="https://picsum.photos/200/500" />
                  </div>
                  <div>
                    <img src="https://picsum.photos/200/600" />
                  </div>
                  <div>
                    <img src="https://picsum.photos/200/700" />
                  </div>
                  <div>
                    <img src="https://picsum.photos/200/800" />
                  </div>
                  <div>
                    <img src="https://picsum.photos/200/900" />
                  </div>
                </Slider>
              </div>
            </div>
          </Container>
        </section>
        <section className="faq py-5 d-flex flex-column justify-content-center" id="faq">
          <div className="position-relative w-100">
            <div className="our-client bg-transparent">
              <Container className="position-relative">
                <h2 className="sticky-title mb-0"> Our Client </h2>
                <div className="d-flex our-client-card flex-wrap">
                  <div className="card">
                    <div className="card-body"><img src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png" alt="image" /></div>
                  </div>
                  <div className="card">
                    <div className="card-body"><img src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png" alt="image" /></div>
                  </div>
                  <div className="card">
                    <div className="card-body"><img src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png" alt="image" /></div>
                  </div>
                  <div className="card">
                    <div className="card-body"><img src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png" alt="image" /></div>
                  </div>
                  <div className="card">
                    <div className="card-body"><img src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751__340.png" alt="image" /></div>
                  </div>
                </div>
              </Container>
            </div>
            <Container>
              <h3 className="text-white fs-1 fw-normal"> FAQ </h3>
              <Row>
                <Col md={8}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header> Accordion Item #1</Accordion.Header>

                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header> Accordion Item #2</Accordion.Header>

                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header> Accordion Item #2</Accordion.Header>

                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header> Accordion Item #2</Accordion.Header>

                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
      </Layout>
    </>
  );
};

export default Homepage;
