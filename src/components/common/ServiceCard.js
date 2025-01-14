import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Maincss.css';

const ServiceCard = ({ isContainer = true }) => {
  return (
    <Container >
      <Row className="service-cards">
        <Col md={5.01} sm={6} className="service-card">
          <h4 className="service-title">Technology</h4>
          <p className="service-description">
            Leverage technology to facilitate the transition, enabling streamlined data management, actionable insights, and measurable sustainability progress & reporting.
          </p>
        </Col>
        <Col md={5.0} sm={6} className="service-card">
          <h4 className="service-title">Advisory</h4>
          <p className="service-description">
            Optimize your ESG transition sustainability strategy with our consulting to drive profitable, sustainable growth while mitigating risks and combating greenwashing effectively.
          </p>
        </Col>
      </Row>
      
      <Row className="service-cards">
        <Col md={5.01} sm={6} className="service-card">
          <h4 className="service-title">Data & Insights</h4>
          <p className="service-description">
            Drive progress through seamless transition with our research, data analysis, and actionable insights, maximizing potential and fostering growth through relevant and informed decisions.
          </p>
        </Col>
        <Col md={5.0} sm={6} className="service-card">
          <h4 className="service-title">Capacity Building</h4>
          <p className="service-description">
            Empower your team with the expertise to navigate the intricate landscape of ESG transition, enhancing internal capacity to foster impactful change through The Transition Talent program.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceCard;
