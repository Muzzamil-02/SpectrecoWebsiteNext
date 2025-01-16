import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';

const CenterText = ({ isContainer, data, hasTitle, underlineHeader=true }) => {
    const content = (
        <Row>
          <Col>
            <h3 className='text-center' style={{fontSize: "1.5rem", color: "#bc1823"}}>{hasTitle ? data.title: ""}</h3>
            <h1 className={`${underlineHeader ? "heading-with-border": ""}`} style={ {fontSize:"2.5rem",fontWeight:"400",color:"#000", textAlign: "center", marginBottom: `${underlineHeader ? "": "50px"}` }}>{data.Heading}</h1>
            <p className="desc-text text-center" >
              {data.Text}
            </p>
          </Col>
        </Row>
      );
    
      return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
    };

export default CenterText