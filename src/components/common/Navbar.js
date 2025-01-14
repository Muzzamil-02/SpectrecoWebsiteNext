"use client";
import Link from 'next/link';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function ResponsiveNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg"  expanded={expanded} >
      <Container>
        <Navbar.Brand href="/">
          <img src="./images/logo.png" alt="Spectreco Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/advisory">Advisory</Nav.Link>
            <NavDropdown title="Industry" id="industry-nav-dropdown">
              <NavDropdown.Item href="/industry/option1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="/industry/option2">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="/industry/option3">Option 3</NavDropdown.Item>
              <NavDropdown.Item href="/industry/option4">Option 4</NavDropdown.Item>
              <NavDropdown.Item href="/industry/option5">Option 5</NavDropdown.Item>
              <NavDropdown.Item href="/industry/option6">Option 6</NavDropdown.Item>
              <NavDropdown.Item href="/industry/option7">Option 7</NavDropdown.Item>
              <NavDropdown.Item href="/industry/option8">Option 8</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="resources-nav-dropdown">
              <NavDropdown.Item href="/resources/option1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="/resources/option2">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="/resources/option3">Option 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="Language" id="language-nav-dropdown">
              <NavDropdown.Item href="/language/option1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="/language/option2">Option 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
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
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
