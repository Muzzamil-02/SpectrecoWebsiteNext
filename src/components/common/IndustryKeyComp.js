import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const IndustryKeyComp = ({heading,components}) => {
  return (
    <section>
    <Container style={{  textAlign: 'center' }}>
    <h2>
      Key Components of the <span style={{ color: '#d30c0b' }}>{heading}</span> Ecosystem
    </h2>
    <Row style={{ marginTop: '40px' }}>
      {components.map((component, index) => (
        <Col key={index} md={2} sm={4} xs={6} style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', width: '70px', height: '60px', margin: '0 auto' }}>
            <Image 
              src={component.imageUrl} 
              alt={component.title} 
              fill 
              style={{ objectFit: 'contain' }} 
            />
          </div>
          <p style={{ marginTop: '10px', fontWeight: '500' }}>{component.title}</p>
        </Col>
      ))}
    </Row>
  </Container>
  </section>
  )
}

export default IndustryKeyComp