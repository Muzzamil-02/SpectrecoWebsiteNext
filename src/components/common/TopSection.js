import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';

const TopSection = ({ imagePosition, isContainer, componentText }) => {
  // Adjust the order based on the imagePosition prop
  const imageOrder = imagePosition === 'left' ? 'order-md-first' : 'order-md-last';
  const textOrder = imagePosition === 'left' ? 'order-md-last' : 'order-md-first';

  const content = (
    <Row className="align-items-center">
      {/* Text Section */}
      <Col
        md={6}
        xs={12}
        className={`text ${textOrder}`}
        style={{
          lineHeight: '1.4',
          padding: '20px',
          textAlign: 'left',
        }}
      >
        <p
          style={{
            fontSize: '48px',
            fontWeight: '500',
            color: '#000',
            marginBottom: '20px',
          }}
          dangerouslySetInnerHTML={{
            __html: componentText.Heading.includes('Sustainability Journey')
              ? `Simplifying your <span style="color: #D30C0B">Sustainability Journey</span> With ESG Solutions`
              : componentText.Heading.includes('ESG')
                ? `Simplified <span style="color: #D30C0B">ESG</span> Reporting - AI-Driven Platform`
                : componentText.Heading,
          }}
        />

        <p
          style={{
            fontSize: '22px',
            color:"#000",
            marginBottom: '32px',
            marginRight: '80px',
            fontWeight: 300
          }}
        >
          {componentText.Text}
        </p>
      </Col>

      {/* Image Section */}
      <Col md={6} xs={12} className={`image ${imageOrder}`}>
        <img
          src={componentText.imageSrc}
          alt="ESG Dashboard"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </Col>
    </Row>
  );

  return isContainer ? <Container fluid className="py-5">{content}</Container> : content;
};

export default TopSection;
