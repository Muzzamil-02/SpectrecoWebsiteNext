"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function ResponsiveNavbar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav-container");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            alt="Spectreco Logo"
            style={{ height: "auto", maxWidth: "200px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} href="/about">About Us</Nav.Link>
            <Nav.Link as={Link} href="/technology">Technology</Nav.Link>
            <Nav.Link as={Link} href="/advisory">Advisory</Nav.Link>
            <NavDropdown title="Industry" id="industry-nav-dropdown">
              <NavDropdown.Item as={Link} href="/industry/built-environment">
                Built Environment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/industry/real-estate">
                Real Estate
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/industry/hospitality">
                Hospitality
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/industry/agriculture">
                Agriculture
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/industry/energy">
                Energy
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/industry/transportation">
                Transportatiion
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/industry/financial-institutions">
                Financial Institutions
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} href="/industry/capital-markets">
                Capital Markets
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} href="/industry/insurance">
                Insurance
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="resources-nav-dropdown">
            <NavDropdown.Item as={Link} href="/resources/insights">
                Blogs & Insights
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/resources/news-press">
                News & Press Releases
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/resources/events-webinar">
                Events Webinar
              </NavDropdown.Item>
             
              <NavDropdown.Item as={Link} href="/resources/research-publications">
                Research & Publications
              </NavDropdown.Item>
     
            </NavDropdown>
            <Nav.Link as={Link} href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href='https://platform.spectreco.com/' as={Button} style={styles.button}>
             Start Free Trial
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = {
  button: {
    backgroundColor: "#d30c0b",
    color: "#ffffff",
    padding: "10px 17px 10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
};
