import React from 'react'
import { Col, Row } from 'react-bootstrap'

const     AboutFirst = ({ heading, description }) => {
  return (
    <Row style={{ paddingTop: "70px", paddingBottom: "70px" }}>
      <Col md={8}> <h1 style={{ color: '#d30c0b', paddingBottom: "30px" }}>{heading}</h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>{description}</p></Col>
      <Col md={2}></Col>
    </Row>
  )
}

export default AboutFirst