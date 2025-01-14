import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Maincss.css';

const IndustrySection = ({ isContainer = true }) => {
    return (
        <Row className="industry-section">
          <Col md={4} className="industries-left">
            <h3>Built Environment Industries</h3>
            <Row className="industries-icons">
              <Col xs={4} className="industry-icon">
                <img src="./images/real-estate-icon.png" alt="Real Estate" />
                <p>REAL ESTATE</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src="./images/infrastructure-icon.png" alt="Infrastructure" />
                <p>INFRASTRUCTURE</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src="./images/hospitality-icon.png" alt="Hospitality" />
                <p>HOSPITALITY</p>
              </Col>
            </Row>
            <Button variant="danger" className="learn-more-btn">
              Learn More
            </Button>
          </Col>
    
          <Col md={8} className="industries-right">
            <Row className="industries-icons">
              <Col xs={2} className="industry-icon">
                <img src="./images/transportation-icon.png" alt="Transportation" />
                <p>TRANSPORTATION</p>
              </Col>
              <Col xs={2} className="industry-icon">
                <img src="./images/financial-institutions-icon.png" alt="Financial Institutions" />
                <p>FINANCIAL INSTITUTIONS</p>
              </Col>
              <Col xs={2} className="industry-icon">
                <img src="./images/capital-market-icon.png" alt="Capital Market" />
                <p>CAPITAL MARKET</p>
              </Col>
           
          
              <Col xs={2} className="industry-icon">
                <img src="./images/insurance-icon.png" alt="Insurance" />
                <p>INSURANCE</p>
              </Col>
              <Col xs={2} className="industry-icon">
                <img src="./images/agriculture-icon.png" alt="Agriculture" />
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