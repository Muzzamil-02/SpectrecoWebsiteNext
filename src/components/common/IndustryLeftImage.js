import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const IndustryLeftImage = ({heading,highlightText,description1,description2,imageUrl}) => {
  return (
    <Container style={{ padding: '50px 0' }}>
      <Row className="align-items-center">
      <p style={{ color: 'red', textTransform: 'uppercase', marginBottom: '10px',textAlign:"center" }}>{heading}</p>
          <h2 style={{ fontWeight: '600',textAlign:"center",marginBottom:"30px"  }}>
            Integrating <span style={{ color: '#d30c0b' }}>{highlightText}</span> with Environmental Impact
          </h2>
        <Col md={6}>
          <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '10px'}}>
            <Image 
              src={imageUrl} 
              alt="Sustainable Infrastructure" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </Col>
        <Col md={6}>
        
          <p style={{  color: '#d30c0b', lineHeight: '1.8' }}>{description1}</p>
          <p style={{  lineHeight: '1.8' }}>{description2}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default IndustryLeftImage