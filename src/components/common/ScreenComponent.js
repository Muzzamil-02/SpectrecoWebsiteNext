import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ScreenComponent = ({ isContainer = true, image = true }) => {
    const content = (
        <Row className="align-items-center">
          <Col md={6} className="text">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">
                <h4 style={{textAlign:"left"}}>Set Baseline</h4>
                <p>
                  Enter baseline data, define company size, specify industry, and establish your starting point for ESG transition through our consulting service for investors, businesses, and governments.
                </p>
              </div>
            </div>
    
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">
                <h4  style={{textAlign:"left"}}>Recommended Interventions</h4>
                <p>
                  Our recommendation engine gives tailored interventions, based on industry, region, company size, and more.
                </p>
              </div>
            </div>
    
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">
                <h4  style={{textAlign:"left"}}>Measure, Track, Report</h4>
                <p>
                  Monitor and report your progress towards ESG goals, assigning tasks across teams and ensuring compliance.
                </p>
              </div>
            </div>
          </Col>
    
          {image && (
            <Col md={6} className="image">
              <img src="./images/screen.png" alt="Process Image" className="img-fluid" />
            </Col>
          )}
        </Row>
      );
    
      return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
    };

export default ScreenComponent