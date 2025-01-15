import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutFirst = ({heading,description}) => {
  return (
   <div>
   
   
    <Row style={{paddingTop:"50px"}}>
   
        <Col md={8}> <h1 style={{ color: '#d30c0b',paddingBottom:"30px" }}>{heading}</h1>
        <p style={{ fontSize: '1rem', maxWidth: '600px' }}>{description}</p></Col>
        <Col md={2}></Col>
    </Row>

  </div>
  )
}

export default AboutFirst