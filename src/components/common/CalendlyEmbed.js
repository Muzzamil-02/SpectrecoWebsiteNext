import React from 'react';

const CalendlyEmbed = () => {
  return (
    <div style={{ height: '700px', width: '100%', }}>
    <h1 style={{textAlign:"center",paddingBottom:"30px",paddingTop:"30px"}}>Let's Connect</h1>
      <iframe
        src="https://calendly.com/spectreco/start-a-conversation-with-spectreco"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        style={{ minWidth: '320px',paddingBottom:"30px" }}
        title="Calendly Scheduling"
      ></iframe>
      <div style={{paddingTop:"20px"}}></div>
    </div>
  );
};

export default CalendlyEmbed;
