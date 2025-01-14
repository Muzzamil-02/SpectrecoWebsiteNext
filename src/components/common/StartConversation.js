import React from 'react';
import './Maincss.css';
import { Container } from 'react-bootstrap';

const StartConversation = () => {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img 
          src='/images/start-1.png' 
          alt="Start a Conversation" 
          style={{ maxWidth: "80%", verticalAlign: "middle" }} 
        />
      </div>
    </Container>
  );
};

export default StartConversation;
