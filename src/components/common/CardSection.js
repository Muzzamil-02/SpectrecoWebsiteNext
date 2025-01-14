import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';


const CardSection = ({ columns = 2, isContainer = true ,image = true }) => {
   // Determine the column size based on the number of columns per row
  const colSize = columns === 3 ? 4 : columns === 2 ? 6 : 3;  // Default to 4 for 3 columns, 6 for 2 columns, 3 for 4 columns

  const content = (
    <Row className="g-4">
      <Col sm={colSize} className="feature-item">
        {image && (
          <div className="feature-icon">
            <img src="/images/feature-icon1.png" alt="Recommendation Engine" />
          </div>
        )}
        <h4>Recommendation Engine</h4>
        <p>
          Maximize ESG impact with tailored, industry-specific interventions ensuring simplicity and compliance across all jurisdictions.
        </p>
      </Col>
      <Col sm={colSize} className="feature-item">
        {image && (
          <div className="feature-icon">
            <img src="/images/jed.jpg" alt="Industry Insights" />
          </div>
        )}
        <h4>Industry Insights</h4>
        <p>
          Unlock ESG strategies with tailored insights and benchmarks, customized to your organization’s size and geographical presence.
        </p>
      </Col>
      <Col sm={colSize} className="feature-item">
        {image && (
          <div className="feature-icon">
            <img src="/images/feature-icon3.png" alt="Consolidated Reporting" />
          </div>
        )}
        <h4>Consolidated Reporting</h4>
        <p>
          Track and report with pre-configured templates, ensuring compliance across various regulations, standards, and frameworks.
        </p>
      </Col>
    </Row>
  );

  return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
};

export default CardSection