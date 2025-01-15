import { Container } from 'react-bootstrap';

const IndustryCenterDescription = ({ heading, description }) => {
  return (
    <Container style={{ padding: '50px', textAlign: 'center' }}>
    <h3 style={{ color: '#d30c0b', marginBottom: '20px' }}>{heading}</h3>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{description}</p>
  </Container>
  )
}

export default IndustryCenterDescription