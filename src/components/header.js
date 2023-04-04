import React, { useEffect, useRef, useState } from "react";
import { Container,Nav,Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [navmenu,setNavmenu]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
     let header= document.querySelector(".site-header");
      if(window.scrollY && window.scrollY>400){
        header.classList.add("header-scroll");
      }else{
        header.classList.remove("header-scroll");
      }
    })
  },[window.scrollY])
  const menuExp=()=>{
    setNavmenu(!navmenu);
  }
  const linkExp=()=>{
    setNavmenu(false);
  }
  return (
    <header className="site-header">
      <Navbar bg="transparent" expand="lg" expanded={navmenu}>
        <Container className="align-items-center">
          <Link to="/" className="site-logo"><span style={{fontSize:"28px"}}>LOGO</span></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={menuExp}>{navmenu?<i className="fa-solid fa-close"></i>:<i className="fa-solid fa-bars"></i>}</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="menu-row mt-2 mt-md-0">
            <Nav className="ms-auto menu-list">
              <Link to="/service" eventKey="1" onClick={linkExp}>Services</Link>
              <Link to="/about" eventKey="2" onClick={linkExp}>About</Link>
              <Link to="/material" eventKey="3" onClick={linkExp}>Materials</Link>
              {/* <Link to="/resource" eventKey="4" onClick={linkExp}>Resources</Link> */}
              <Link to="/contact" eventKey="5" onClick={linkExp}>Contact</Link>
              <HashLink to="/#faq" eventKey="6" onClick={linkExp}>FAQ</HashLink>
            </Nav>
            <Link to="/" className="pills-btn-link d-none d-lg-inline-block">Get a Quote</Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header;