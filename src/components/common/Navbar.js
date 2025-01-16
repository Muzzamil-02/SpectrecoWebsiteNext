"use client";
import Link from 'next/link';
import { useState , useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function ResponsiveNavbar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav-container');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <Navbar expand="lg"  expanded={expanded} >
      <Container className='nav-container'>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" alt="Spectreco Logo" style={{ height: 'auto', maxWidth: '200px' }}  />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/advisory">Advisory</Nav.Link>
            <NavDropdown title="Industry" id="industry-nav-dropdown" >
              <NavDropdown.Item href="/industry/agriculture">Agriculture</NavDropdown.Item>
              <NavDropdown.Item href="/industry/built-environment">Built Environment</NavDropdown.Item>
              <NavDropdown.Item href="/industry/capital-markets">Capital Markets</NavDropdown.Item>
              <NavDropdown.Item href="/industry/energy">Energy</NavDropdown.Item>
              <NavDropdown.Item href="/industry/financial-institutions">Financial Institutions</NavDropdown.Item>
              <NavDropdown.Item href="/industry/hospitality">Hospitality</NavDropdown.Item>
              <NavDropdown.Item href="/industry/insurance">Insurance</NavDropdown.Item>
              <NavDropdown.Item href="/industry/real-estate">Real Estate</NavDropdown.Item>
              <NavDropdown.Item href="/industry/transportation">Transportatiion</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="resources-nav-dropdown">
              <NavDropdown.Item href="/resources/events-webinar">Events Webinar</NavDropdown.Item>
              <NavDropdown.Item href="/resources/insights">Insights</NavDropdown.Item>
              <NavDropdown.Item href="/resources/research-publications">Research&Publications</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href='https://platform.spectreco.com/'>
              <button style={styles.button}>Start Free Trial</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = {
  button: {
    backgroundColor: '#d30c0b',
    color: '#ffffff',
    padding: '10px 17px 10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};
