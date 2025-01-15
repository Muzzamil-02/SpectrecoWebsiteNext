import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Maincss.css';

const IndustrySection = ({ isContainer = true, data }) => {
    return (
        <Row className="industry-section">
          <Col md={4} className="industries-left">
            <h3>Built Environment Industries</h3>
            <Row className="industries-icons">
              <Col xs={4} className="industry-icon">
                <img src={data.left.hospitality.imgURL} alt={data.left.hospitality.alt} />
                <p>REAL ESTATE</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src={data.left.infrastructure.imgURL} alt={data.left.infrastructure.alt} />
                <p>INFRASTRUCTURE</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src={data.left.realEstate.imgURL} alt={data.left.realEstate.alt} />
                <p>REAL ESTATE</p>
              </Col>
            </Row>
            <Button variant="danger" className="learn-more-btn">
              Learn More
            </Button>
          </Col>
    
          <Col md={8} className="industries-right">
            <Row className="industries-icons">
              <Col xs={4} className="industry-icon">
                <img src={data.right.transportation.imgURL} alt={data.right.transportation.alt} />
                <p>TRANSPORTATION</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src={data.right.financialInstitutions.imgURL} alt={data.right.financialInstitutions.alt} />
                <p>FINANCIAL INSTITUTIONS</p>
              </Col>
              <Col xs={4} className="industry-icon">
                <img src={data.right.capi.imgURL} alt={data.right.capi.alt} />
                <p>CAPITAL MARKET</p>
              </Col>
              </Row>
<Row className='align-items-center justify-content-center'> 
          
              <Col xs={3} className="industry-icon">
                <img src={data.right.insuranceComapany.imgURL} alt={data.right.insuranceComapany.alt} />
                <p>INSURANCE</p>
              </Col>
              <Col xs={3} className="industry-icon">
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