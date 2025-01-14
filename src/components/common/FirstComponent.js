
"use client";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
const FirstComponent = ({ title, highlightedText, description, imageUrl,title2 })=> {
  return (
    <Container >
      <Row className="align-items-center">
        <Col md={6}>
          <h1 style={{ fontSize: '2.5rem', lineHeight: '1.4' }}>
            {title} <span style={{ color: '#d30c0b' }}>{highlightedText}</span> 
            <span> {title2}</span>
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '20px' }}>
            {description}
          </p>
        </Col>
        <Col md={6}>
        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
  <Image 
    src={imageUrl || '/default-image.png'} 
    alt="Dynamic Content Image" 
    fill 
    style={{ objectFit: 'cover' }}
  />
</div>

        </Col>
      </Row>
    </Container>
  )
}

export default FirstComponent