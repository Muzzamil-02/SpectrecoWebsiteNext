import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';

const CenterText = ({ isContainer }) => {
    const content = (
        <Row>
          <Col>
            <h3 className="offering-header">OUR OFFERINGS</h3>
            <h1 className="main-heading">Optimize and Elevate Your ESG Performance</h1>
            <p className="description">
              Maximize your ESG impact with Spectreco’s comprehensive technology platform & consulting services, meticulously designed to propel your
              sustainability journey forward. Our innovative approach optimizes your built environment, simplifies the transition journey, and ensures compliance
              across multi-jurisdictions. With real-time insights, we empower you to navigate the complexities of ESG effortlessly, reduce costs, and drive substantial
              progress toward a more sustainable future. Harnessing real-time insights in our Sustainability Services enables impactful decision-making and optimized
              resource allocation for maximum ROI. Partner with Spectreco to confidently achieve your Net Zero targets while safeguarding profitability and enhancing
              long-term value creation in today’s complex regulatory landscape.
            </p>
            <img src="./images/hero-2.png" alt="ESG Dashboard"  style={{width:"100%"}}/>
          </Col>
        </Row>
      );
    
      return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
    };

export default CenterText