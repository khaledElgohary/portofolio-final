import React, { useState, useRef, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  const [show, setShow] = useState(true);
  const [expanded, setExpanded] = useState(false); // State for controlling Navbar expansion
  const lastScrollY = useRef(0); // Use useRef to keep track of the last scroll position

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY.current && window.scrollY > 100 && !expanded) {
      // Scrolling down
      setShow(false);
    } else if (window.scrollY < lastScrollY.current || expanded) {
      // Scrolling up
      setShow(true);
    }
    lastScrollY.current = window.scrollY; // Update the last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [expanded]);

  return (
    <div className={`header ${show ? 'visible' : 'hidden'}`}>
      <Navbar expand="lg" variant="dark" expanded={expanded} onToggle={()=> setExpanded(!expanded)}>
        <Container >
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }}>
            Khaled Elgohary</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="m-auto">
              <Nav.Link style={{ color: 'white' }} href="#home">HOME</Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="#about-me-intro">ABOUT ME</Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="#skills-header">SKILLS</Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="#experience">EXPERIENCE</Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="#projects">PROJECTS</Nav.Link>
              <Nav.Link style={{ color: 'white' }} href="#resume">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
