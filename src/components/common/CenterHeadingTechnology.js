import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';

const CenterHeadingTechnology = ({ isContainer, data, hasTitle, underlineHeader=true }) => {
    const content = (
        <Row>
          <Col>
          <h3 className='text-center heading-with-border'>
            <span style={{ color: '#d30c0b' }}>{data.title1}</span>
            <span style={{ color: '#333' }}> {data.title2}</span>
          </h3>
         
            <p className="desc-text text-center" >
              {data.Text}
            </p>
          </Col>
        </Row>
      );
    
      return isContainer ? <Container fluid className="p-5 text-center">{content}</Container> : content;
    };

export default CenterHeadingTechnology