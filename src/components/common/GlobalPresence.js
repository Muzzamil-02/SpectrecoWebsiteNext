import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Maincss.css'
const GlobalPresence = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
      <p className="text-danger">Our <span className="fw-bold">Global Presence</span></p>
        {/* Image on the left */}
        <Col md={6}>
          <Image src="./images/map.png" alt="Global Map" fluid />
        </Col>

        {/* Text on the right */}
        <Col md={6}>
          
          <p className='textalign-left'>
            We are at the forefront of driving sustainable solutions and ESG initiatives worldwide.
            Our strategic partnerships and deep industry expertise enable us to collaborate with
            businesses, governments, and communities globally to create a sustainable future.
          </p>
          <p className='textalign-left'>
            Our Asia office oversees operations in the Middle East and Saudi Arabia markets, the US
            office manages the US market, the UK office handles the UK market, and the Portugal
            office caters to the European market.
          </p>
          <p className='textalign-left'>US: Spectreco LLC, 1708 Peachtree Street NW, Suite 303, Atlanta, GA 30309, USA</p>
          <p className='textalign-left'>UK: Spectreco LLP, 128 City Road London, EC1V 2NX, United Kingdom</p>
          <p className='textalign-left'>Europe: Spectreco Europe Private, Unipessoal LDA, Avenida da Liberdade 129B, 1250-140 Lisbon, Portugal</p>
          <p className='textalign-left'>Asia: ESG Consulting (Private) Limited, 141-D, SLHS, Lahore, Pakistan</p>
         
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalPresence;
