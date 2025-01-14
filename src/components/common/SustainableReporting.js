import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';

const SustainableReporting = ({ isContainer = true, image = true }) => {
  const content = (
    <Row className="align-items-start">
      <Col md={6} className="text" style={{backgroundColor:"#EFEFEF"}}>
        <h3 style={{color:"#d30c0b",fontFamily:"poppins Sans-serif",fontSize:"22px",fontWeight:"300"}}>SUSTAINABILITY FRAMEWORKS & DISCLOSURES</h3>
        <h1 className="main-heading">Sustainable Reporting Simplified</h1>
        <p className="description">
          From predefined frameworks to customizable options, Spectreco’s AI-Driven platform streamlines sustainability disclosures tailored to your business needs. Access support for crafting audit-ready reports across all regulations, standards, and frameworks, ensuring compliance and meeting shareholders’ and stakeholders’ demands seamlessly.
        </p>
      </Col>
      <Col md={6} className="image">
        {image && <img src="./images/esgcompanies.png" alt="Sustainable Reporting" className="img-fluid" />}
      </Col>
    </Row>
  );

  return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
};

export default SustainableReporting;
