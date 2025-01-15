import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Maincss.css';

const TopSection = ({ imagePosition , isContainer ,componentText }) => {
  // Use 'order-md-first' or 'order-md-last' based on imagePosition prop

  const imageOrder = imagePosition === 'left' ? 'order-md-first' : 'order-md-last';
  const textOrder = imagePosition === 'left' ? 'order-md-last' : 'order-md-first';

  const content = (
    <Row className="align-items-center">
      <Col md={6} className={`text ${textOrder}`} style={{ lineHeight:"1.2", padding:"0 7% 0 0"}}>
        <p style={{fontSize:"3.25rem",fontWeight:"400",color:"#000",  padding:"0 10% 0 0" }}>{componentText.Heading}</p>
        <p style={{fontSize:"1.5rem",color:"#000", marginBottom: "50px"}}>
        {componentText.Text}
        </p>
            <Button variant="danger" style={{ borderRadius: "5px" }}>
                {componentText.buttonText}
            </Button>
      </Col>
     
      <Col md={6} className={`image ${imageOrder}`}>
        <img src={componentText.imageSrc} alt="ESG Dashboard" className="img-fluid" />
      </Col>
    </Row>
  );

  return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
}

export default TopSection;
