import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import './Maincss.css';

const CenterText = ({ isContainer ,heading,description,imageUrl}) => {
    const content = (
        <Row>
          <Col>
           
            <h1 style={{textAlign:"center"}}>{heading}</h1>
            <p style={{textAlign:"center"}}>
             {description}
            </p>
            <div style={{
                      position: 'relative',
                      width: '80%',
                      height: '500px',
                    
                      borderRadius: '10px',
                      
                   
                    }}>
                      <Image 
                        src={imageUrl} 
                        alt="Industry Transition" 
                        layout="fill" 
                        objectFit="contain"
                      />
                    </div>
                    <p style={{ marginTop: '20px',textAlign:"center" }}>It only takes a few clicks to get started.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <Button 
            style={{ 
              backgroundColor: '#d30c0b', 
              border: 'none', 
              padding: '10px 30px', 
              fontSize: '16px', 
              fontWeight: '600' 
            }}
          >
            Get started – it’s free
          </Button>
        </div>
        <p style={{ marginTop: '10px', color: '#d30c0b',textAlign:"center" }}>Free for 60 days, no credit card required</p>
          </Col>
        </Row>
      );
    
      return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
    };

export default CenterText