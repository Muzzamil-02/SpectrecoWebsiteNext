import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';

const TechnologyBox = ({topHeading, heading, buttonText, paragraph}) => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center py-5">
    <Row>
      <Col>
        <h1 className="fw-bold mb-3">{topHeading}</h1>
        <h4 className="mb-4">{heading}</h4>
        <Button 
          variant="danger" 
          size="lg" 
          className="px-4 py-2 mb-3"
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