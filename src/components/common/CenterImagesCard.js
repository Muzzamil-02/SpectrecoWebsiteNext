import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import './Maincss.css';

const CenterImagesCard = ({ isContainer, data }) => {
  const content = (
    <Row className="align-items-center">
      <Col xs={12}>
        <h4 style={{ color: "#d30c0b", textAlign: "center", paddingBottom: "30px" }}>
          Tailored Solutions for Businesses & Investors
        </h4>
      </Col>

      {/** Dynamically Render Cards */}
      {Object.keys(data).map((key, index) => (
        <Col
          key={index}
          xs={12}
          sm={6}
          md={3}
          className="d-flex flex-column align-items-center mb-4"
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <Image
              width={70}
              height={70}
              src={data[key].imageURL}
              alt={`Image for ${data[key].heading}`}
              style={{ objectFit: "contain" }}
            />
          </div>

          <h4
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#000",
              textAlign: "center",
            }}
          >
            {data[key].heading}
          </h4>

          <p className="desc-text text-center" style={{ padding: "0 10px" }}>
            {data[key].description}
          </p>
        </Col>
      ))}
    </Row>
  );

  return isContainer ? <Container fluid className="py-5">{content}</Container> : content;
};

export default CenterImagesCard;
