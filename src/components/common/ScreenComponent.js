import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ScreenComponent = ({ isContainer = true, image = true }) => {
    const content = (
      <>
        <Row className="align-items-center" style={{marginBottom: "20px"}}>
          <Col md={6} className="text">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">
                <h4 style={{textAlign:"left", fontWeight:"400"}}>Set Baseline</h4>
                <p>
                  Enter baseline data, define company size, specify industry, and establish your starting point for ESG transition through our consulting service for investors, businesses, and governments.
                </p>
              </div>
            </div>
    
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">
                <h4  style={{textAlign:"left" , fontWeight:"400"}}>Recommended Interventions</h4>
                <p>
                  Our recommendation engine gives tailored interventions, based on industry, region, company size, and more.
                </p>
              </div>
            </div>
    
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">
                <h4  style={{textAlign:"left", fontWeight:"400"}}>Measure, Track, Report</h4>
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
        <Row className='align-items-center justify-content-center pb-4 '>
          <Col className='justify-content-center align-items-center ' style={{display: "flex"}} >
            <Link href={'contactus'}>
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#d30c0b",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  
                }}
                
              >
                Book a Demo
              </button >
            </Link>
          </Col>
          
        </Row>
        
        <Col className='justify-content-center align-items-center flex'style={{textAlign: "center"}} >
              <span>Need more information? Check out our step-by-step video guide <a href='#' style={{ textDecoration:"none", color:"#bc1823"}}> here</a></span>
          </Col>
        
      </>
    );
    
    
      return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
    };

export default ScreenComponent