import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';

const TechnologyBox = ({topHeading, heading, buttonText, paragraph}) => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center bg-light text-center" style={{paddingTop:"100px", paddingBottom:"100px"}}>
    <Row>
      <Col>
        <h1 className="fw-bold mb-3">{topHeading}</h1>
        <h4 className="mb-4">{heading}</h4>
        <Button 
         style={{ 
          backgroundColor: '#d30c0b', 
          border: 'none', 
          borderRadius: '0px',
          padding: '20px 60px 20px 60px', 
          fontSize: '16px', 
          fontWeight: '600' 
        }}
        className='mb-4'
        >
          {buttonText}
        </Button>
        
        <p>{paragraph}</p>
      </Col>
    </Row>
  </Container>
  )
}

export default TechnologyBox