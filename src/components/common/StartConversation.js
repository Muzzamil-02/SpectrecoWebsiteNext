import React from 'react';
import './Maincss.css';
import Image from 'next/image';

const StartConversation = ({ paddingTop='0'}) => {
  return (
      <div style={{width:"600px", height:"90px", margin:"auto", paddingTop }}>
        <Image
          src="/images/start-1.png"
          alt="Start a Conversation"
          loading='lazy'
          width="600" 
          height="90"
        />
      </div>
  );
};

export default StartConversation;
