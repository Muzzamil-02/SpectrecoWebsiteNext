import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Maincss.css';
import data from './data.json';

const ImageText = ({ imagePosition , isContainer ,componentText }) => {
  // Use 'order-md-first' or 'order-md-last' based on imagePosition prop

  const imageOrder = imagePosition === 'left' ? 'order-md-first' : 'order-md-last';
  const textOrder = imagePosition === 'left' ? 'order-md-last' : 'order-md-first';

  const content = (
    <Row className="align-items-center">
      <Col md={7} className={`text ${textOrder}`}>
      <p style={{fontSize:"22px",fontWeight:"300",color:"#d30c0b"}}>{componentText.mainHeading}</p>
        <p style={{fontSize:"40px",fontWeight:"400",color:"#000"}}>{componentText.Heading}</p>
        <p style={{fontSize:"1rem",color:"#000"}}>
        {componentText.Text}
        </p>
        <div className="text-center mt-4">
              <Button variant="danger" style={{ borderRadius: "5px" }}>
              {componentText.buttonText}
              </Button>
            </div>
      </Col>
     
      <Col md={5} className={`image ${imageOrder}`}>
        <img src={componentText.imageSrc} alt="ESG Dashboard" className="img-fluid" />
      </Col>
    </Row>
  );

  return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
}

export default ImageText;
