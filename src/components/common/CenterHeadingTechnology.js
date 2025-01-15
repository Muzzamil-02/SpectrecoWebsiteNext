import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';

const CenterHeadingTechnology = ({ isContainer, data, hasTitle, underlineHeader=true }) => {
    const content = (
        <Row>
          <Col>
          <h2 className='text-center'>
            <span style={{ color: 'red' }}>{data.title1}</span>
            <span style={{ color: '#333' }}>{data.title2}</span>
          </h2>
          <hr style={{ borderTop: '2px solid red', width: '80%', margin: '0 auto' }} />
            <p className="desc-text text-center" >
              {data.Text}
            </p>
          </Col>
        </Row>
      );
    
      return isContainer ? <Container fluid className="p-5 text-center">{content}</Container> : content;
    };

export default CenterHeadingTechnology