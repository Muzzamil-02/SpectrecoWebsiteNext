import React from 'react';
import { Container } from 'react-bootstrap';
import './Maincss.css';

const SustainableReporting = ({ isContainer = true, data }) => {
  const content = (
    <div className="align-items-start row with-border" style={{ display: "flex", alignItems: "stretch", height: "80vh" }}>
      {/* Left Text Container */}
      <div className="text col-md-7" style={{ backgroundColor: "rgb(239, 239, 239)", fontFamily: "'Poppins', Sans-serif", padding: "50px", height: "100%", borderRadius: "0 50px 50px 0 " }}>
        <h3 style={{ color: "rgb(211, 12, 11)", fontSize: "1.15rem", fontWeight: "300" }}>
          {data.Heading}
        </h3>
        <h1 className="main-heading" style={{fontSize:"2.5rem"}}>Sustainable Reporting Simplified</h1>
        <p className="description">
         {data.Text}
        </p>
      </div>

      {/* Right Image Container */}
      <div className="image col-md-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "1", height: "inherit" }}>
        <img 
          alt="Sustainable Reporting"
          className="img-fluid"
          src={data.imageSrc}
          style={{ 
            width: "auto", 
            height: "inherit", /* Ensures the image takes the full height of the container */
            objectFit: "contian" /* Ensures the image fills the container properly */
          }} 
        />
      </div>
    </div>
  );

  return isContainer ? <Container fluid className="p-5" style={{ height: "100vh" }}>{content}</Container> : content;
};

export default SustainableReporting;
