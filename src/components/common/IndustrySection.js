import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Maincss.css';

const IndustrySection = ({ isContainer = true, data }) => {
    return (
        <Row className="industry-section align-items-center justify-content-center" style={{height: "60vh"}}>
          <Col md={4} className="industries-left grey-card" style={{height:"100%", display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "space-around"}}>
            <h4 style={{fontSize: "1.5rem", fontWeight: "400", color: "#bc1823"}}>Built Environment Industries</h4>
            <Row className="industries-icons">
              <Col xs={4} className="industry-icon">
                <img src={data.left.hospitality.imgURL} alt={data.left.hospitality.alt} />
                <p style={{fontSize: "12px"}}>REAL ESTATE</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src={data.left.infrastructure.imgURL} alt={data.left.infrastructure.alt} />
                <p style={{fontSize: "12px"}}>INFRASTRUCTURE</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src={data.left.realEstate.imgURL} alt={data.left.realEstate.alt} />
                <p style={{fontSize: "12px"}}>REAL ESTATE</p>
              </Col>
            </Row>
            <Button variant="danger" className="learn-more-btn">
              Learn More
            </Button>
          </Col>
    
          <Col md={8} className="industries-right">
          <div style={{height: "2.0rem"}}></div>

            <Row className="industries-icons">
              <Col xs={2} className="industry-icon">
                <img src={data.right.transportation.imgURL} alt={data.right.transportation.alt} />
                <p>TRANSPORTATION</p>
              </Col>
              <Col xs={2} className="industry-icon">
                <img src={data.right.financialInstitutions.imgURL} alt={data.right.financialInstitutions.alt} />
                <p>FINANCIAL INSTITUTIONS</p>
              </Col>
              <Col xs={2} className="industry-icon">
                <img src={data.right.capi.imgURL} alt={data.right.capi.alt} />
                <p>CAPITAL MARKET</p>
              </Col>
          
              <Col xs={2} className="industry-icon">
                <img src={data.right.insuranceComapany.imgURL} alt={data.right.insuranceComapany.alt} />
                <p>INSURANCE</p>
              </Col>
              <Col xs={2} className="industry-icon">
                <img src={data.right.agriculture.imgURL} alt={data.right.agriculture.alt} />
                <p>AGRICULTURE</p>
              </Col>
              </Row>

            <div className="description2">
              <h5>
                Built Environment remains central to our approach across all industries at Spectreco.
              </h5>
            </div>
          </Col>
        </Row>
      );
}

export default IndustrySection