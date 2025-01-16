import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Maincss.css';

const ServiceCard = ({ isContainer = true }) => {
  return (
    <Container >
      <Row className="service-cards" style={{justifyContent: "center"}}>
        <Col md={5} sm={6} className="service-card">
          <h4 className="service-title fs-1 textalign-left">Technology</h4>
          <p className="service-description textalign-left">
            Leverage technology to facilitate the transition, enabling streamlined data management, actionable insights, and measurable sustainability progress & reporting.
          </p>
        </Col>
        <Col md={5} sm={6} className="service-card">
          <h4 className="service-title textalign-left">Advisory</h4>
          <p className="service-description textalign-left">
            Optimize your ESG transition sustainability strategy with our consulting to drive profitable, sustainable growth while mitigating risks and combating greenwashing effectively.
          </p>
        </Col>
      </Row>
      
      <Row className="service-cards" style={{justifyContent: "center"}}>
        <Col md={5} sm={6} className="service-card">
          <h4 className="service-title textalign-left" style={{textAlign:'left'}}>Data & Insights</h4>
          <p className="service-description textalign-left" style={{textAlign:'left'}}>
            Drive progress through seamless transition with our research, data analysis, and actionable insights, maximizing potential and fostering growth through relevant and informed decisions.
          </p>
        </Col>
        <Col md={5} sm={6} className="service-card">
          <h4 className="service-title textalign-left">Capacity Building</h4>
          <p className="service-description textalign-left">
            Empower your team with the expertise to navigate the intricate landscape of ESG transition, enhancing internal capacity to foster impactful change through The Transition Talent program.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceCard;
