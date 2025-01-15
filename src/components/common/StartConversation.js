import React from 'react';
import './Maincss.css';
import { Container } from 'react-bootstrap';

const StartConversation = ({ padding }) => {
  return (
    <Container style={{ paddingTop: padding ? '130px' : '0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/images/start-1.png"
          alt="Start a Conversation"
          style={{ maxWidth: '40%', verticalAlign: 'middle' }}
        />
      </div>
    </Container>
  );
};

export default StartConversation;
